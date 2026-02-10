
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip, Cell } from 'recharts';
import { formatCurrency } from '../constants';

interface SellerDashboardProps {
  onLogout: () => void;
}

const data = [
  { name: 'Mon', sales: 42000 },
  { name: 'Tue', sales: 65000 },
  { name: 'Wed', sales: 38000 },
  { name: 'Thu', sales: 95000 },
  { name: 'Fri', sales: 52000 },
  { name: 'Sat', sales: 120000 },
  { name: 'Sun', sales: 85000 },
];

const SellerDashboard: React.FC<SellerDashboardProps> = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  return (
    <div className="bg-slate-50 dark:bg-backgroundDark min-h-screen pb-24">
      <header className="pt-12 pb-6 px-6 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center sticky top-0 z-30">
        <div>
          <p className="text-[10px] font-black text-primary uppercase tracking-widest">Business Central</p>
          <h1 className="text-2xl font-black italic tracking-tighter uppercase">Organic Harvest Co.</h1>
        </div>
        <button onClick={handleLogout} className="bg-slate-100 dark:bg-slate-800 p-2 rounded-lg text-slate-500">
           <span className="material-icons">exit_to_app</span>
        </button>
      </header>

      <main className="px-6 py-6 space-y-6">
        <div className="grid grid-cols-1 gap-4">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1">Total Sales (Monthly)</p>
            <div className="flex items-baseline gap-2">
               <p className="text-3xl font-black">{formatCurrency(485250)}</p>
               <span className="text-xs font-bold text-green-600">+18.2%</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
           <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm text-center">
              <p className="text-[9px] text-slate-500 font-black uppercase mb-1">Orders</p>
              <p className="text-lg font-black">124</p>
           </div>
           <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm text-center">
              <p className="text-[9px] text-slate-500 font-black uppercase mb-1">Visitors</p>
              <p className="text-lg font-black">2.5k</p>
           </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <h3 className="font-black uppercase tracking-widest text-[10px] mb-6 text-slate-400">Revenue Performance</h3>
          <div className="h-40 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <XAxis dataKey="name" axisLine={false} tickLine={false} fontSize={10} />
                <Tooltip cursor={{ fill: 'transparent' }} formatter={(val: number) => formatCurrency(val)} />
                <Bar dataKey="sales" radius={[4, 4, 0, 0]}>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.sales > 90000 ? '#f49d25' : '#f49d2533'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button 
            onClick={() => navigate('/seller/inventory')}
            className="flex flex-col items-center justify-center bg-primary text-white py-6 rounded-2xl font-black uppercase tracking-tighter shadow-xl shadow-primary/30 active:scale-95 transition-transform"
          >
            <span className="material-icons text-3xl mb-1">inventory_2</span>
            Products
          </button>
          <button className="flex flex-col items-center justify-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-800 py-6 rounded-2xl font-black uppercase tracking-tighter active:scale-95 transition-transform">
            <span className="material-icons text-primary text-3xl mb-1">payments</span>
            Payouts
          </button>
        </div>
      </main>
    </div>
  );
};

export default SellerDashboard;
