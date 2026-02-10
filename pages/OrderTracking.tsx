
import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrderTracking: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-backgroundLight dark:bg-backgroundDark min-h-screen">
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-primary/10 px-4 py-3 flex items-center justify-between">
        <button onClick={() => navigate(-1)} className="w-10 h-10 flex items-center justify-start text-primary">
          <span className="material-icons">arrow_back_ios</span>
        </button>
        <div className="text-center">
          <h1 className="text-lg font-bold">Track Order</h1>
          <p className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold">Order #98234-AX</p>
        </div>
        <button className="w-10 h-10 flex items-center justify-end text-primary">
          <span className="material-icons">help_outline</span>
        </button>
      </header>

      <main className="pb-32">
        {/* Map View */}
        <div className="relative h-[300px] w-full bg-slate-200 overflow-hidden">
          <img 
            className="w-full h-full object-cover grayscale-[20%] opacity-80" 
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80" 
            alt="Map View" 
          />
          <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/30 rounded-full animate-ping scale-150"></div>
              <div className="relative bg-primary text-white p-2 rounded-full shadow-lg border-2 border-white">
                <span className="material-icons text-sm">local_shipping</span>
              </div>
            </div>
          </div>
          <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-900/90 px-3 py-1 rounded-full shadow-sm flex items-center gap-2 border border-primary/20">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            <span className="text-[11px] font-bold uppercase tracking-wider">Live Tracking</span>
          </div>
        </div>

        {/* Courier Info */}
        <div className="px-4 -mt-8 relative z-10">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-5 flex items-center justify-between border border-primary/5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center overflow-hidden border border-primary/5">
                <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" alt="Courier" />
              </div>
              <div>
                <h3 className="font-bold text-sm">Marco Rodriguez</h3>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Nexus Prime Delivery</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 flex items-center justify-center"><span className="material-icons text-lg">chat_bubble_outline</span></button>
              <button className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/30"><span className="material-icons text-lg">phone</span></button>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="px-6 py-8">
          <div className="relative">
            <div className="absolute left-[11px] top-2 bottom-2 w-[2px] bg-slate-200 dark:bg-slate-700"></div>
            <div className="absolute left-[11px] top-2 h-3/4 w-[2px] bg-primary"></div>
            
            {[
              { label: 'Order Placed', time: 'October 24, 2023 • 09:42 AM', active: true },
              { label: 'Shipped from Warehouse', time: 'October 24, 2023 • 02:15 PM', active: true },
              { label: 'Out for Delivery', time: 'Arriving in 12-15 mins', active: true, shipping: true },
              { label: 'Delivered', time: 'Expected today', active: false }
            ].map((step, i) => (
              <div key={i} className={`relative flex gap-6 pb-10 ${!step.active ? 'opacity-30' : ''}`}>
                <div className={`relative z-10 w-6 h-6 rounded-full flex items-center justify-center text-white ring-4 ring-white dark:ring-slate-900 ${step.active ? 'bg-primary' : 'bg-slate-200 dark:bg-slate-700'}`}>
                  <span className="material-icons text-[14px]">{step.shipping ? 'local_shipping' : 'check'}</span>
                </div>
                <div>
                  <h4 className={`font-bold text-sm ${step.shipping ? 'text-primary' : ''}`}>{step.label}</h4>
                  <p className="text-xs text-slate-500 mt-1 font-medium">{step.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-t border-primary/10 z-[60]">
        <div className="max-w-md mx-auto flex gap-3">
          <button className="flex-1 py-4 px-4 bg-primary/10 text-primary font-black uppercase tracking-widest rounded-xl text-[10px] flex items-center justify-center gap-2">
            <span className="material-icons text-sm">support_agent</span> Get Help
          </button>
          <button className="flex-[1.5] py-4 px-4 bg-primary text-white font-black uppercase tracking-widest rounded-xl text-[10px] shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
            Order Details <span className="material-icons text-sm">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;
