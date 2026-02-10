
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import BuyerHome from './pages/BuyerHome';
import ProductListing from './pages/ProductListing';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderTracking from './pages/OrderTracking';
import AdminDashboard from './pages/AdminDashboard';
import SellerDashboard from './pages/SellerDashboard';
import SellerInventory from './pages/SellerInventory';
import UserProfile from './pages/UserProfile';
import LoginPortal from './pages/LoginPortal';
import { CartProvider, useCart } from './context/CartContext';
import AIChat from './components/AIChat';

const Navigation = ({ userRole }: { userRole: string | null }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cartCount } = useCart();
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    const path = location.pathname.substring(1);
    if (path.startsWith('home')) setActiveTab('home');
    else if (path.startsWith('listing')) setActiveTab('listing');
    else if (path.startsWith('cart')) setActiveTab('cart');
    else if (path.startsWith('profile')) setActiveTab('profile');
    else setActiveTab(path || 'home');
  }, [location]);

  if (!userRole || userRole !== 'buyer') return null;

  const hideNavOnPaths = ['/admin', '/seller', '/checkout', '/track', '/'];
  const shouldHide = hideNavOnPaths.some(p => location.pathname === p || location.pathname.startsWith('/seller') || location.pathname.startsWith('/admin'));
  
  if (shouldHide) return null;

  const tabs = [
    { id: 'home', icon: 'home', label: 'Home', path: '/home' },
    { id: 'listing', icon: 'apps', label: 'Browse', path: '/listing' },
    { id: 'cart', icon: 'shopping_cart', label: 'Cart', path: '/cart', badge: cartCount },
    { id: 'profile', icon: 'person', label: 'Profile', path: '/profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 px-6 py-3 flex justify-between items-center z-50 shadow-[0_-10px_30px_-15px_rgba(0,0,0,0.05)]">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => navigate(tab.path)}
          className={`flex flex-col items-center space-y-1 transition-all ${
            activeTab === tab.id 
              ? 'text-primary scale-110' 
              : 'text-slate-400'
          }`}
        >
          <div className="relative">
            <span className="material-icons">{activeTab === tab.id ? tab.icon : tab.icon + '_outlined'}</span>
            {tab.badge !== undefined && tab.badge > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-red-500 text-white text-[9px] font-black h-4 w-4 rounded-full flex items-center justify-center border-2 border-white dark:border-slate-900 shadow-sm">
                {tab.badge}
              </span>
            )}
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest leading-none">{tab.label}</span>
        </button>
      ))}
    </nav>
  );
};

const AppRoutes = () => {
  const [userRole, setUserRole] = useState<string | null>(localStorage.getItem('nexus_role'));

  const handleLogin = (role: string) => {
    localStorage.setItem('nexus_role', role);
    setUserRole(role);
  };

  const handleLogout = () => {
    localStorage.removeItem('nexus_role');
    setUserRole(null);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPortal onLogin={handleLogin} />} />
        <Route path="/home" element={userRole === 'buyer' ? <BuyerHome /> : <Navigate to="/" />} />
        <Route path="/listing" element={userRole === 'buyer' ? <ProductListing /> : <Navigate to="/" />} />
        <Route path="/product/:id" element={userRole === 'buyer' ? <ProductDetail /> : <Navigate to="/" />} />
        <Route path="/cart" element={userRole === 'buyer' ? <Cart /> : <Navigate to="/" />} />
        <Route path="/checkout" element={userRole === 'buyer' ? <Checkout /> : <Navigate to="/" />} />
        <Route path="/track" element={userRole === 'buyer' ? <OrderTracking /> : <Navigate to="/" />} />
        <Route path="/admin" element={userRole === 'admin' ? <AdminDashboard /> : <Navigate to="/" />} />
        <Route path="/seller" element={userRole === 'seller' ? <SellerDashboard onLogout={handleLogout} /> : <Navigate to="/" />} />
        <Route path="/seller/inventory" element={userRole === 'seller' ? <SellerInventory /> : <Navigate to="/" />} />
        <Route path="/profile" element={userRole === 'buyer' ? <UserProfile onLogout={handleLogout} /> : <Navigate to="/" />} />
      </Routes>
      <Navigation userRole={userRole} />
      {userRole === 'buyer' && <AIChat />}
    </>
  );
};

const App: React.FC = () => {
  return (
    <CartProvider>
      <HashRouter>
        <div className="min-h-screen bg-backgroundLight dark:bg-backgroundDark transition-colors">
          <AppRoutes />
          <div className="fixed bottom-1.5 left-1/2 -translate-x-1/2 w-36 h-1 bg-slate-200 dark:bg-slate-700 rounded-full z-[60] opacity-30"></div>
        </div>
      </HashRouter>
    </CartProvider>
  );
};

export default App;
