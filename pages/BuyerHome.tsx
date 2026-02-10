
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PRODUCTS, CATEGORIES, formatCurrency } from '../constants';

const BuyerHome: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [timeLeft, setTimeLeft] = useState('01:42:55');

  // Real-time countdown simulation
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const h = 23 - now.getHours();
      const m = 59 - now.getMinutes();
      const s = 59 - now.getSeconds();
      setTimeLeft(`${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const flashDeals = PRODUCTS.filter(p => p.discount).slice(0, 8);
  const nexusChoice = PRODUCTS.filter(p => p.rating >= 4.7).slice(0, 6);
  const techShowcase = PRODUCTS.filter(p => p.category === 'Tech').slice(0, 4);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/listing?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="animate-in fade-in duration-500 pb-24 bg-slate-50 dark:bg-backgroundDark">
      {/* Sticky Premium Header */}
      <header className="sticky top-0 z-40 bg-primary dark:bg-slate-900 px-4 py-4 shadow-lg transition-colors">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <button className="text-white lg:hidden">
              <span className="material-icons text-2xl">menu</span>
            </button>
            <span className="text-white text-2xl font-black italic tracking-tighter">NEXUS</span>
          </div>
          <div className="flex space-x-3 items-center">
             <div className="hidden sm:flex flex-col items-end text-white/80">
                <span className="text-[10px] font-black uppercase">Deliver to</span>
                <span className="text-xs font-bold leading-none">Arjun • Mumbai 400001</span>
             </div>
             <div className="relative cursor-pointer" onClick={() => navigate('/profile')}>
                <div className="w-9 h-9 rounded-full border-2 border-white/20 overflow-hidden bg-white/10">
                   <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" alt="Avatar" className="w-full h-full object-cover" />
                </div>
             </div>
          </div>
        </div>
        
        <form onSubmit={handleSearch} className="flex items-center space-x-2">
          <div className="relative flex-grow">
            <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
            <input 
              className="w-full bg-white dark:bg-slate-800 border-none rounded-xl py-3 pl-10 pr-12 text-sm focus:ring-2 focus:ring-accentBlue shadow-inner font-medium text-slate-800 dark:text-slate-100" 
              placeholder="Search for Mobiles, Fashion & More" 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
              <span className="material-icons text-xl">photo_camera</span>
            </button>
          </div>
        </form>
      </header>

      {/* Quick Access Toolbar */}
      <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 overflow-x-auto hide-scrollbar flex space-x-8 px-6 py-3">
        {CATEGORIES.map(c => (
          <button 
            key={c.name} 
            onClick={() => navigate(`/listing?category=${c.name}`)}
            className="flex flex-col items-center gap-1 min-w-fit group"
          >
            <span className={`material-icons text-xl ${c.color} group-hover:scale-110 transition-transform`}>{c.icon}</span>
            <span className="text-[10px] font-black uppercase tracking-tighter text-slate-500 dark:text-slate-400">{c.name}</span>
          </button>
        ))}
      </div>

      <main>
        {/* Dynamic Hero Carousel */}
        <section className="mt-4 px-4">
          <div className="relative h-64 w-full overflow-hidden rounded-[2.5rem] shadow-2xl">
            <img 
              className="w-full h-full object-cover" 
              src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1200&q=80" 
              alt="Holiday Sale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-primary text-white text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-widest">Global Sale</span>
                <span className="text-white/60 text-[9px] font-black uppercase tracking-widest">Ends in 24h</span>
              </div>
              <h2 className="text-white text-4xl font-black leading-none uppercase tracking-tighter max-w-[280px]">FESTIVE <br/>MEGA DEALS</h2>
              <p className="text-primary text-lg font-black mt-2 italic tracking-tighter">UP TO 80% OFF</p>
              <button 
                onClick={() => navigate('/listing')}
                className="mt-6 bg-white text-black text-[11px] font-black py-4 px-10 rounded-full w-fit uppercase shadow-xl active:scale-95 transition-all hover:bg-primary hover:text-white"
              >
                Shop the Collection
              </button>
            </div>
          </div>
        </section>

        {/* Utility Shortcuts */}
        <section className="grid grid-cols-4 gap-3 px-4 mt-8">
           {[
             { label: 'Reorder', icon: 'replay', color: 'bg-blue-500' },
             { label: 'Pay Bills', icon: 'receipt_long', color: 'bg-green-500' },
             { label: 'Coupons', icon: 'confirmation_number', color: 'bg-orange-500' },
             { label: 'Nexus Pay', icon: 'account_balance_wallet', color: 'bg-purple-500' }
           ].map((action, i) => (
             <div key={i} className="bg-white dark:bg-slate-800 p-3 rounded-2xl flex flex-col items-center gap-2 shadow-sm border border-slate-100 dark:border-slate-800 active:scale-95 transition-transform cursor-pointer">
                <div className={`${action.color} w-11 h-11 rounded-full flex items-center justify-center text-white shadow-lg`}>
                  <span className="material-icons text-xl">{action.icon}</span>
                </div>
                <span className="text-[9px] font-black uppercase text-slate-500 dark:text-slate-400 tracking-wider text-center">{action.label}</span>
             </div>
           ))}
        </section>

        {/* Lightning Deals */}
        <section className="mt-10 bg-white dark:bg-slate-800 py-10 px-4 border-y border-slate-100 dark:border-slate-700">
          <div className="flex items-end justify-between mb-8">
            <div>
              <div className="flex items-center gap-2 mb-1">
                 <span className="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse"></span>
                 <h3 className="font-black text-2xl italic tracking-tighter uppercase text-slate-800 dark:text-white">Lightning Deals</h3>
              </div>
              <div className="flex items-center gap-2 text-red-600">
                 <span className="material-icons text-base">timer</span>
                 <span className="text-[11px] font-black uppercase tracking-widest font-mono">End in {timeLeft}</span>
              </div>
            </div>
            <button onClick={() => navigate('/listing')} className="text-primary text-[11px] font-black uppercase tracking-[0.2em] border-b-2 border-primary pb-1">Explore All</button>
          </div>
          
          <div className="flex overflow-x-auto hide-scrollbar space-x-6 pb-4">
            {flashDeals.map(product => (
              <div 
                key={product.id} 
                onClick={() => navigate(`/product/${product.id}`)}
                className="w-48 flex-shrink-0 cursor-pointer group"
              >
                <div className="aspect-[4/5] rounded-[2.5rem] bg-slate-50 dark:bg-slate-900 mb-4 overflow-hidden border border-slate-100 dark:border-slate-700 relative shadow-lg group-hover:shadow-primary/10 transition-all">
                  <img 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    src={product.imageUrl} 
                    alt={product.name}
                  />
                  <div className="absolute top-4 left-4 bg-red-600 text-white text-[9px] font-black px-3 py-1 uppercase rounded-full shadow-lg">
                    {product.discount} OFF
                  </div>
                </div>
                <div className="px-2">
                   <h4 className="text-[11px] font-bold text-slate-800 dark:text-slate-200 line-clamp-1 mb-1">{product.name}</h4>
                   <div className="flex items-center gap-2">
                      <span className="text-sm font-black text-primary">{formatCurrency(product.price)}</span>
                      <span className="text-[10px] text-slate-400 line-through">{formatCurrency(product.originalPrice || product.price * 1.2)}</span>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Showcase Section */}
        <section className="mt-10 px-4">
           <div className="bg-slate-900 rounded-[2.5rem] p-8 relative overflow-hidden text-white">
              <div className="relative z-10">
                 <h3 className="text-2xl font-black italic tracking-tighter uppercase mb-2">Upgrade Your Gear</h3>
                 <p className="text-xs text-white/60 mb-8 max-w-[200px]">Latest from Apple, Samsung and Sony with No Cost EMI</p>
                 <div className="grid grid-cols-2 gap-4">
                    {techShowcase.map(product => (
                      <div 
                        key={product.id}
                        onClick={() => navigate(`/product/${product.id}`)}
                        className="bg-white/5 backdrop-blur-md p-4 rounded-3xl border border-white/10 flex flex-col items-center text-center cursor-pointer active:scale-95 transition-transform"
                      >
                         <img src={product.imageUrl} className="w-20 h-20 object-contain mb-3 drop-shadow-2xl" alt={product.name} />
                         <span className="text-[10px] font-bold line-clamp-1 opacity-80">{product.brand}</span>
                         <span className="text-xs font-black">{formatCurrency(product.price)}</span>
                      </div>
                    ))}
                 </div>
                 <button 
                  onClick={() => navigate('/listing?category=Tech')}
                  className="w-full mt-6 py-4 bg-primary text-white font-black uppercase text-[10px] tracking-widest rounded-2xl shadow-xl shadow-primary/20"
                 >
                   Browse Tech Store
                 </button>
              </div>
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-[80px]"></div>
           </div>
        </section>

        {/* Nexus Choice Curated */}
        <section className="mt-12 px-4 mb-12">
           <div className="flex items-baseline justify-between mb-8">
              <h3 className="font-black text-2xl italic tracking-tighter uppercase">Nexus Choice</h3>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Curated for Excellence</p>
           </div>
           <div className="grid grid-cols-2 gap-x-5 gap-y-10">
              {nexusChoice.map(product => (
                <div key={product.id} onClick={() => navigate(`/product/${product.id}`)} className="cursor-pointer group">
                  <div className="aspect-square rounded-[2rem] bg-white dark:bg-slate-800 overflow-hidden mb-4 border border-slate-100 dark:border-slate-800 shadow-sm relative transition-all group-hover:border-primary/50 group-hover:shadow-xl">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={product.imageUrl} alt={product.name} />
                    <button className="absolute bottom-3 right-3 w-9 h-9 bg-white/90 dark:bg-slate-800/90 rounded-full shadow-lg flex items-center justify-center text-slate-400 hover:text-primary transition-colors">
                      <span className="material-icons text-xl">add_shopping_cart</span>
                    </button>
                  </div>
                  <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 line-clamp-2 leading-tight h-8 mb-2">{product.name}</h4>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-black">{formatCurrency(product.price)}</span>
                    <div className="flex items-center gap-1 bg-green-100 dark:bg-green-900/30 text-green-700 px-1.5 py-0.5 rounded text-[9px] font-black">
                       {product.rating} <span className="material-icons text-[9px]">star</span>
                    </div>
                  </div>
                </div>
              ))}
           </div>
        </section>
      </main>
    </div>
  );
};

export default BuyerHome;
