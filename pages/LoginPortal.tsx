
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface LoginPortalProps {
  onLogin: (role: string) => void;
}

const LoginPortal: React.FC<LoginPortalProps> = ({ onLogin }) => {
  const navigate = useNavigate();

  const handleRoleSelection = (role: string) => {
    onLogin(role);
    if (role === 'buyer') navigate('/home');
    if (role === 'seller') navigate('/seller');
    if (role === 'admin') navigate('/admin');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-backgroundLight dark:bg-backgroundDark animate-in fade-in duration-700">
      <div className="mb-12 text-center">
        <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center shadow-2xl shadow-primary/40 mx-auto mb-4 rotate-3">
          <span className="material-icons text-white text-5xl font-bold">shopping_bag</span>
        </div>
        <h1 className="text-4xl font-black italic tracking-tighter text-slate-800 dark:text-white">NEXUS</h1>
        <p className="text-slate-500 font-bold uppercase text-[10px] tracking-[0.2em] mt-2">The Multi-Vendor Ecosystem</p>
      </div>

      <div className="w-full max-w-sm space-y-4">
        <button 
          onClick={() => handleRoleSelection('buyer')}
          className="w-full bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 flex items-center gap-6 group hover:border-primary transition-all active:scale-95"
        >
          <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
            <span className="material-icons text-3xl">shopping_cart</span>
          </div>
          <div className="text-left">
            <h3 className="font-bold text-lg">Buyer Portal</h3>
            <p className="text-xs text-slate-500">Shop premium electronics & fashion</p>
          </div>
        </button>

        <button 
          onClick={() => handleRoleSelection('seller')}
          className="w-full bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 flex items-center gap-6 group hover:border-orange-500 transition-all active:scale-95"
        >
          <div className="w-14 h-14 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
            <span className="material-icons text-3xl">storefront</span>
          </div>
          <div className="text-left">
            <h3 className="font-bold text-lg">Seller Hub</h3>
            <p className="text-xs text-slate-500">Manage products & grow business</p>
          </div>
        </button>

        <div className="pt-8 text-center">
          <button 
            onClick={() => handleRoleSelection('admin')}
            className="text-xs font-bold text-slate-400 uppercase tracking-widest hover:text-primary transition-colors"
          >
            Admin Dashboard
          </button>
        </div>
      </div>
      
      <p className="mt-20 text-[10px] text-slate-400 font-medium">By continuing, you agree to Nexus Terms of Service.</p>
    </div>
  );
};

export default LoginPortal;
