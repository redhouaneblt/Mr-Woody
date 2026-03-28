import { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Hammer, 
  Image as ImageIcon, 
  MessageSquare, 
  Users, 
  Settings, 
  LogOut, 
  Plus, 
  Edit, 
  Trash2, 
  CheckCircle2, 
  Clock, 
  Search,
  LogIn,
  ShieldCheck,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { auth, db, googleProvider } from '../firebase';
import { signInWithPopup, signOut, onAuthStateChanged, User } from 'firebase/auth';
import { 
  collection, 
  getDocs, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  query, 
  orderBy, 
  serverTimestamp,
  Timestamp
} from 'firebase/firestore';
import { cn } from '../lib/utils';

// --- Admin Components ---

const AdminSidebar = ({ user }: { user: User }) => {
  const location = useLocation();
  const navItems = [
    { name: 'Dashboard', path: '/admin', icon: <LayoutDashboard size={20} /> },
    { name: 'Services', path: '/admin/services', icon: <Hammer size={20} /> },
    { name: 'Portfolio', path: '/admin/portfolio', icon: <ImageIcon size={20} /> },
    { name: 'Testimonials', path: '/admin/testimonials', icon: <MessageSquare size={20} /> },
    { name: 'Submissions', path: '/admin/submissions', icon: <Users size={20} /> },
  ];

  return (
    <aside className="w-64 bg-wood-dark text-white h-screen sticky top-0 flex flex-col p-6">
      <div className="flex items-center gap-2 mb-12">
        <div className="w-8 h-8 bg-wood-light rounded-lg flex items-center justify-center text-wood-dark">
          <ShieldCheck size={18} />
        </div>
        <span className="text-xl font-serif font-bold">Admin Panel</span>
      </div>

      <nav className="flex-grow space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-xl transition-all",
              location.pathname === item.path 
                ? "bg-wood-medium text-white shadow-lg" 
                : "text-wood-light/60 hover:bg-white/5 hover:text-white"
            )}
          >
            {item.icon}
            <span className="font-medium">{item.name}</span>
          </Link>
        ))}
      </nav>

      <div className="mt-auto pt-6 border-t border-white/10 space-y-4">
        <div className="flex items-center gap-3 px-2">
          <div className="w-10 h-10 rounded-full bg-wood-medium/20 flex items-center justify-center font-bold text-wood-light">
            {user.email?.[0].toUpperCase()}
          </div>
          <div className="overflow-hidden">
            <p className="text-sm font-bold truncate">{user.displayName || 'Admin'}</p>
            <p className="text-xs text-wood-light/50 truncate">{user.email}</p>
          </div>
        </div>
        <button 
          onClick={() => signOut(auth)}
          className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-red-400 hover:bg-red-400/10 transition-all"
        >
          <LogOut size={20} />
          <span className="font-medium">Sign Out</span>
        </button>
      </div>
    </aside>
  );
};

const DashboardOverview = () => {
  const [stats, setStats] = useState({ services: 0, portfolio: 0, testimonials: 0, submissions: 0 });

  useEffect(() => {
    const fetchStats = async () => {
      const [s, p, t, sub] = await Promise.all([
        getDocs(collection(db, 'services')),
        getDocs(collection(db, 'portfolio')),
        getDocs(collection(db, 'testimonials')),
        getDocs(collection(db, 'contacts')),
      ]);
      setStats({
        services: s.size,
        portfolio: p.size,
        testimonials: t.size,
        submissions: sub.size
      });
    };
    fetchStats();
  }, []);

  const cards = [
    { name: 'Total Services', value: stats.services, icon: <Hammer />, color: 'bg-blue-500' },
    { name: 'Portfolio Items', value: stats.portfolio, icon: <ImageIcon />, color: 'bg-purple-500' },
    { name: 'Testimonials', value: stats.testimonials, icon: <MessageSquare />, color: 'bg-green-500' },
    { name: 'New Submissions', value: stats.submissions, icon: <Users />, color: 'bg-orange-500' },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-serif font-bold text-wood-dark">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-wood-beige flex items-center gap-6">
            <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center text-white", card.color)}>
              {card.icon}
            </div>
            <div>
              <p className="text-sm text-wood-medium font-bold uppercase tracking-widest">{card.name}</p>
              <p className="text-3xl font-bold text-wood-dark">{card.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-wood-beige">
          <h3 className="text-xl font-serif font-bold mb-6">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            <Link to="/admin/portfolio" className="p-4 bg-wood-beige/30 rounded-2xl flex flex-col items-center gap-3 hover:bg-wood-beige transition-all">
              <Plus className="text-wood-medium" />
              <span className="text-sm font-bold">Add Project</span>
            </Link>
            <Link to="/admin/services" className="p-4 bg-wood-beige/30 rounded-2xl flex flex-col items-center gap-3 hover:bg-wood-beige transition-all">
              <Plus className="text-wood-medium" />
              <span className="text-sm font-bold">Add Service</span>
            </Link>
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-wood-beige">
          <h3 className="text-xl font-serif font-bold mb-6">System Status</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-green-50 rounded-2xl">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-green-500" size={20} />
                <span className="font-medium text-green-700">Database Connected</span>
              </div>
              <span className="text-xs font-bold text-green-600 uppercase">Online</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-blue-50 rounded-2xl">
              <div className="flex items-center gap-3">
                <Clock className="text-blue-500" size={20} />
                <span className="font-medium text-blue-700">Last Backup</span>
              </div>
              <span className="text-xs font-bold text-blue-600 uppercase">2h ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SubmissionsManager = () => {
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubmissions = async () => {
      const q = query(collection(db, 'contacts'), orderBy('createdAt', 'desc'));
      const snapshot = await getDocs(q);
      setSubmissions(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      setLoading(false);
    };
    fetchSubmissions();
  }, []);

  const updateStatus = async (id: string, status: string) => {
    await updateDoc(doc(db, 'contacts', id), { status });
    setSubmissions(submissions.map(s => s.id === id ? { ...s, status } : s));
  };

  const deleteSubmission = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this submission?')) {
      await deleteDoc(doc(db, 'contacts', id));
      setSubmissions(submissions.filter(s => s.id !== id));
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-serif font-bold text-wood-dark">Contact Submissions</h1>
      </div>

      <div className="bg-white rounded-[2rem] shadow-sm border border-wood-beige overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-wood-beige/50 text-wood-medium text-xs font-bold uppercase tracking-widest">
                <th className="px-8 py-6">Name</th>
                <th className="px-8 py-6">Service</th>
                <th className="px-8 py-6">Status</th>
                <th className="px-8 py-6">Date</th>
                <th className="px-8 py-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-wood-beige">
              {submissions.map((s) => (
                <tr key={s.id} className="hover:bg-wood-beige/10 transition-colors">
                  <td className="px-8 py-6">
                    <p className="font-bold text-wood-dark">{s.name}</p>
                    <p className="text-xs text-wood-medium">{s.email}</p>
                  </td>
                  <td className="px-8 py-6">
                    <span className="text-sm font-medium bg-wood-beige px-3 py-1 rounded-full">{s.service}</span>
                  </td>
                  <td className="px-8 py-6">
                    <select 
                      value={s.status} 
                      onChange={(e) => updateStatus(s.id, e.target.value)}
                      className={cn(
                        "text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full focus:outline-none",
                        s.status === 'new' ? "bg-orange-100 text-orange-600" : 
                        s.status === 'contacted' ? "bg-blue-100 text-blue-600" : "bg-green-100 text-green-600"
                      )}
                    >
                      <option value="new">New</option>
                      <option value="contacted">Contacted</option>
                      <option value="closed">Closed</option>
                    </select>
                  </td>
                  <td className="px-8 py-6 text-sm text-wood-medium">
                    {s.createdAt?.toDate ? s.createdAt.toDate().toLocaleDateString() : 'N/A'}
                  </td>
                  <td className="px-8 py-6 text-right space-x-2">
                    <button 
                      onClick={() => deleteSubmission(s.id)}
                      className="p-2 text-red-400 hover:bg-red-50 rounded-lg transition-all"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// --- Main Admin Page ---

export default function Admin() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-wood-beige">
        <div className="w-12 h-12 border-4 border-wood-medium border-t-wood-dark rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-wood-beige px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-12 md:p-16 rounded-[3rem] shadow-2xl max-w-md w-full text-center space-y-8"
        >
          <div className="w-20 h-20 bg-wood-dark text-white rounded-[2rem] flex items-center justify-center mx-auto shadow-xl">
            <ShieldCheck size={40} />
          </div>
          <div>
            <h1 className="text-3xl font-serif font-bold text-wood-dark mb-4">Admin Access</h1>
            <p className="text-wood-dark/60 leading-relaxed">
              Please sign in with your authorized Google account to access the Mr Woody management dashboard.
            </p>
          </div>
          <button 
            onClick={handleLogin}
            className="w-full bg-wood-dark text-white py-5 rounded-2xl font-bold uppercase tracking-widest hover:bg-wood-medium transition-all shadow-xl flex items-center justify-center gap-3"
          >
            <LogIn size={20} /> Sign In with Google
          </button>
          <Link to="/" className="block text-sm font-bold text-wood-medium uppercase tracking-widest hover:text-wood-dark transition-colors">
            Back to Website
          </Link>
        </motion.div>
      </div>
    );
  }

  // Check if user is the authorized admin
  if (user.email !== 'redhouane761@gmail.com') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-wood-beige px-6">
        <div className="bg-white p-12 rounded-[3rem] shadow-2xl max-w-md w-full text-center space-y-6">
          <div className="w-20 h-20 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto">
            <X size={40} />
          </div>
          <h1 className="text-2xl font-serif font-bold text-wood-dark">Access Denied</h1>
          <p className="text-wood-dark/60">
            Your account ({user.email}) is not authorized to access the admin panel.
          </p>
          <button 
            onClick={() => signOut(auth)}
            className="w-full bg-wood-dark text-white py-4 rounded-2xl font-bold uppercase tracking-widest hover:bg-wood-medium transition-all"
          >
            Sign Out
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-wood-beige/30">
      <AdminSidebar user={user} />
      <main className="flex-grow p-12 overflow-y-auto">
        <Routes>
          <Route path="/" element={<DashboardOverview />} />
          <Route path="/submissions" element={<SubmissionsManager />} />
          <Route path="/services" element={<div className="p-12 text-center bg-white rounded-3xl border border-wood-beige">Services Management (Coming Soon)</div>} />
          <Route path="/portfolio" element={<div className="p-12 text-center bg-white rounded-3xl border border-wood-beige">Portfolio Management (Coming Soon)</div>} />
          <Route path="/testimonials" element={<div className="p-12 text-center bg-white rounded-3xl border border-wood-beige">Testimonials Management (Coming Soon)</div>} />
        </Routes>
      </main>
    </div>
  );
}
