
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { formatCurrency } from '../constants';

interface UserProfileProps {
  onLogout: () => void;
}

type SubView = 'main' | 'addresses' | 'payments' | 'wallet' | 'notifications' | 'support';

const UserProfile: React.FC<UserProfileProps> = ({ onLogout }) => {
  const navigate = useNavigate();
  const [activeSubView, setActiveSubView] = useState<SubView>('main');
  const [isEditing, setIsEditing] = useState(false);
  const [userName, setUserName] = useState('Arjun Kumar');
  const [userEmail, setUserEmail] = useState('arjun.k@nexus.in');
  
  const [tempName, setTempName] = useState(userName);
  const [tempEmail, setTempEmail] = useState(userEmail);

  // Notifications State
  const [notifs, setNotifs] = useState({
    orders: true,
    promos: false,
    offers: true,
    security: true
  });

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  const saveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setUserName(tempName);
    setUserEmail(tempEmail);
    setIsEditing(false);
  };

  const renderSubView = () => {
    switch (activeSubView) {
      case 'addresses':
        return (
          <div className="animate-in slide-in-from-right duration-300">
             <div className="flex items-center gap-4 mb-6">
                <button onClick={() => setActiveSubView('main')} className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                  <span className="material-icons text-sm">arrow_back</span>
                </button>
                <h2 className="font-black uppercase italic tracking-tighter text-lg">Saved Addresses</h2>
             </div>
             <div className="space-y-4">
                {[
                  { type: 'Home', address: '452 Market Street, Apt 4B, San Francisco, CA 94103', isDefault: true },
                  { type: 'Office', address: 'Nexus Tech Park, Block C, Floor 12, Mumbai 400001', isDefault: false }
                ].map((addr, i) => (
                  <div key={i} className={`p-4 rounded-2xl border-2 transition-all ${addr.isDefault ? 'border-primary bg-primary/5' : 'border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-800'}`}>
                    <div className="flex justify-between items-center mb-2">
                       <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-primary text-white">{addr.type}</span>
                       <div className="flex gap-2 text-slate-400">
                          <span className="material-icons text-sm">edit</span>
                          <span className="material-icons text-sm text-red-400">delete_outline</span>
                       </div>
                    </div>
                    <p className="text-sm font-medium text-slate-600 dark:text-slate-400">{addr.address}</p>
                  </div>
                ))}
                <button className="w-full py-4 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-2xl flex items-center justify-center gap-2 text-slate-400 font-bold text-xs uppercase tracking-widest">
                   <span className="material-icons text-sm">add</span> Add New Address
                </button>
             </div>
          </div>
        );
      case 'payments':
        return (
          <div className="animate-in slide-in-from-right duration-300">
             <div className="flex items-center gap-4 mb-6">
                <button onClick={() => setActiveSubView('main')} className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                  <span className="material-icons text-sm">arrow_back</span>
                </button>
                <h2 className="font-black uppercase italic tracking-tighter text-lg">Payment Methods</h2>
             </div>
             <div className="space-y-4">
                {[
                  { brand: 'VISA', last4: '4242', exp: '12/26', color: 'bg-blue-600' },
                  { brand: 'Mastercard', last4: '8812', exp: '09/25', color: 'bg-slate-800' }
                ].map((card, i) => (
                  <div key={i} className={`${card.color} p-5 rounded-2xl text-white shadow-xl relative overflow-hidden`}>
                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-8">
                         <span className="font-black italic text-lg tracking-tighter">{card.brand}</span>
                         <span className="material-icons">contactless</span>
                      </div>
                      <p className="text-xl font-bold tracking-[0.2em] mb-4">•••• •••• •••• {card.last4}</p>
                      <div className="flex justify-between items-end">
                         <div>
                            <p className="text-[8px] uppercase font-black opacity-60">Card Holder</p>
                            <p className="text-xs font-bold uppercase">{userName}</p>
                         </div>
                         <div className="text-right">
                            <p className="text-[8px] uppercase font-black opacity-60">Expires</p>
                            <p className="text-xs font-bold">{card.exp}</p>
                         </div>
                      </div>
                    </div>
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                  </div>
                ))}
                <button className="w-full py-4 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center gap-2 text-slate-600 dark:text-slate-300 font-bold text-xs uppercase tracking-widest">
                   <span className="material-icons text-sm">add_card</span> Link New Card
                </button>
             </div>
          </div>
        );
      case 'wallet':
        return (
          <div className="animate-in slide-in-from-right duration-300">
             <div className="flex items-center gap-4 mb-6">
                <button onClick={() => setActiveSubView('main')} className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                  <span className="material-icons text-sm">arrow_back</span>
                </button>
                <h2 className="font-black uppercase italic tracking-tighter text-lg">Nexus Wallet</h2>
             </div>
             <div className="bg-gradient-to-br from-primary to-orange-600 p-8 rounded-[2.5rem] text-white shadow-2xl shadow-primary/20 mb-8 text-center">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-80 mb-2">Available Balance</p>
                <h3 className="text-4xl font-black">{formatCurrency(0)}</h3>
                <button className="mt-6 bg-white text-primary font-black uppercase text-[10px] py-3 px-8 rounded-full shadow-lg active:scale-95 transition-transform">Top Up Wallet</button>
             </div>
             <h4 className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-4">Recent Transactions</h4>
             <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 divide-y divide-slate-50 dark:divide-slate-700">
                <div className="p-12 text-center text-slate-400">
                   <span className="material-icons text-4xl mb-2 opacity-20">history</span>
                   <p className="text-xs font-medium">No transactions yet</p>
                </div>
             </div>
          </div>
        );
      case 'notifications':
        return (
          <div className="animate-in slide-in-from-right duration-300">
             <div className="flex items-center gap-4 mb-6">
                <button onClick={() => setActiveSubView('main')} className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                  <span className="material-icons text-sm">arrow_back</span>
                </button>
                <h2 className="font-black uppercase italic tracking-tighter text-lg">Notifications</h2>
             </div>
             <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 divide-y divide-slate-100 dark:divide-slate-700">
                {[
                  { key: 'orders', label: 'Order Updates', desc: 'Real-time delivery tracking' },
                  { key: 'promos', label: 'Promotions', desc: 'Personalized deals and vouchers' },
                  { key: 'offers', label: 'Bank Offers', desc: 'Card specific cashbacks' },
                  { key: 'security', label: 'Security Alerts', desc: 'Login activity and password changes' }
                ].map((item) => (
                  <div key={item.key} className="p-4 flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold">{item.label}</h4>
                      <p className="text-[10px] text-slate-500">{item.desc}</p>
                    </div>
                    <button 
                      onClick={() => setNotifs(prev => ({...prev, [item.key]: !prev[item.key as keyof typeof notifs]}))}
                      className={`w-12 h-6 rounded-full transition-colors relative ${notifs[item.key as keyof typeof notifs] ? 'bg-primary' : 'bg-slate-200 dark:bg-slate-700'}`}
                    >
                      <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${notifs[item.key as keyof typeof notifs] ? 'left-7' : 'left-1'}`}></div>
                    </button>
                  </div>
                ))}
             </div>
          </div>
        );
      default:
        return (
          <div className="animate-in fade-in duration-300 space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <button onClick={() => navigate('/track')} className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center group active:scale-95 transition-all">
                  <span className="material-icons text-accentBlue mb-2 group-hover:scale-110 transition-transform">shopping_bag</span>
                  <span className="text-xs font-bold uppercase tracking-wider">My Orders</span>
              </button>
              <button className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center group active:scale-95 transition-all">
                  <span className="material-icons text-pink-500 mb-2 group-hover:scale-110 transition-transform">favorite</span>
                  <span className="text-xs font-bold uppercase tracking-wider">Wishlist</span>
              </button>
            </div>

            <section>
              <h3 className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-3 ml-1">Account Settings</h3>
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden divide-y divide-slate-50 dark:divide-slate-700">
                  {[
                    { label: 'Saved Addresses', icon: 'location_on', view: 'addresses' },
                    { label: 'Payment Methods', icon: 'credit_card', view: 'payments' },
                    { label: 'Nexus Wallet', icon: 'account_balance_wallet', badge: '₹0.00', view: 'wallet' },
                    { label: 'Notifications', icon: 'notifications_none', view: 'notifications' },
                    { label: 'Contact Support', icon: 'headset_mic', view: 'support' }
                  ].map((item, i) => (
                    <button 
                      key={i} 
                      onClick={() => item.view && setActiveSubView(item.view as SubView)}
                      className="w-full flex items-center justify-between p-4 active:bg-slate-50 dark:active:bg-slate-800/50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className="material-icons text-slate-400 text-lg">{item.icon}</span>
                        <span className="text-sm font-medium">{item.label}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {item.badge && <span className="text-[9px] font-black bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded-full">{item.badge}</span>}
                        <span className="material-icons text-slate-300">chevron_right</span>
                      </div>
                    </button>
                  ))}
              </div>
            </section>

            <button 
              onClick={handleLogout}
              className="w-full py-4 text-red-500 font-black text-sm uppercase tracking-widest bg-white dark:bg-slate-800 rounded-xl border border-red-100 dark:border-red-900/30 shadow-sm active:bg-red-50 transition-all"
            >
              Logout Account
            </button>
          </div>
        );
    }
  };

  return (
    <div className="bg-slate-50 dark:bg-backgroundDark min-h-screen relative">
      {/* Dynamic Header */}
      {activeSubView === 'main' && (
        <header className="bg-white dark:bg-slate-900 px-6 pt-12 pb-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
           <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full border-2 border-primary overflow-hidden shadow-sm bg-slate-100">
                 <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80" alt="User" />
              </div>
              <div>
                 <h1 className="text-xl font-bold">{userName}</h1>
                 <p className="text-xs text-slate-500">{userEmail}</p>
              </div>
           </div>
           <button 
             onClick={() => {
               setTempName(userName);
               setTempEmail(userEmail);
               setIsEditing(true);
             }}
             className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center transition-transform active:scale-90"
           >
             <span className="material-icons">edit</span>
           </button>
        </header>
      )}

      <main className={`px-4 pb-32 ${activeSubView === 'main' ? 'py-6' : 'py-8'}`}>
        {renderSubView()}
      </main>

      {/* Profile Edit Modal */}
      <div className={`fixed inset-0 z-[100] transition-opacity duration-300 ${isEditing ? 'visible' : 'invisible'}`}>
        <div 
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isEditing ? 'opacity-100' : 'opacity-0'}`} 
          onClick={() => setIsEditing(false)}
        />
        <div className={`absolute bottom-0 left-0 right-0 bg-white dark:bg-slate-900 rounded-t-3xl p-6 transition-transform duration-500 transform ${isEditing ? 'translate-y-0' : 'translate-y-full'}`}>
           <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-black uppercase italic tracking-tighter">Edit Profile</h2>
              <button onClick={() => setIsEditing(false)} className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                <span className="material-icons text-sm">close</span>
              </button>
           </div>
           
           <form onSubmit={saveProfile} className="space-y-6">
              <div className="space-y-2">
                 <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Full Name</label>
                 <div className="relative">
                    <span className="material-icons absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">person</span>
                    <input 
                      required
                      value={tempName}
                      onChange={(e) => setTempName(e.target.value)}
                      className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-xl py-4 pl-12 pr-4 text-sm font-bold focus:ring-2 focus:ring-primary" 
                    />
                 </div>
              </div>

              <div className="space-y-2">
                 <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Email Address</label>
                 <div className="relative">
                    <span className="material-icons absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">email</span>
                    <input 
                      required
                      type="email"
                      value={tempEmail}
                      onChange={(e) => setTempEmail(e.target.value)}
                      className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-xl py-4 pl-12 pr-4 text-sm font-bold focus:ring-2 focus:ring-primary" 
                    />
                 </div>
              </div>

              <button 
                type="submit" 
                className="w-full bg-primary text-white font-black uppercase py-4 rounded-xl shadow-lg shadow-primary/30 mt-4 active:scale-95 transition-transform"
              >
                Save Changes
              </button>
           </form>
           <div className="h-8"></div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
