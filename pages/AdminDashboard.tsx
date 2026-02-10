
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const data = [
  { name: 'Mon', revenue: 2400 },
  { name: 'Tue', revenue: 1398 },
  { name: 'Wed', revenue: 9800 },
  { name: 'Thu', revenue: 3908 },
  { name: 'Fri', revenue: 4800 },
  { name: 'Sat', revenue: 3800 },
  { name: 'Sun', revenue: 4300 },
];

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-backgroundLight dark:bg-backgroundDark min-h-screen pb-24">
      <header className="px-4 pt-6 pb-2 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Nexus Admin</h1>
          <p className="text-xs text-slate-500 font-medium">Platform Overview</p>
        </div>
        <button onClick={() => navigate('/')} className="text-primary font-bold text-sm">Exit</button>
      </header>

      <main className="px-4 py-4 space-y-6">
        {/* KPI Cards */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
            <div className="flex justify-between items-start mb-2">
              <div className="p-2 bg-primary/10 rounded-lg"><span className="material-icons text-primary">payments</span></div>
              <span className="text-[10px] font-bold text-green-500 bg-green-50 dark:bg-green-900/20 px-1.5 py-0.5 rounded-full">+12%</span>
            </div>
            <p className="text-slate-500 text-xs font-medium">Total Sales</p>
            <h3 className="text-lg font-bold">$24,482</h3>
          </div>
          <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
            <div className="flex justify-between items-start mb-2">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg"><span className="material-icons text-blue-500">group</span></div>
              <span className="text-[10px] font-bold text-green-500 bg-green-50 dark:bg-green-900/20 px-1.5 py-0.5 rounded-full">+5%</span>
            </div>
            <p className="text-slate-500 text-xs font-medium">Active Users</p>
            <h3 className="text-lg font-bold">1,204</h3>
          </div>
        </div>

        {/* Charts */}
        <div className="bg-white dark:bg-slate-800 p-5 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
          <h2 className="font-bold text-lg mb-4">Revenue Trends</h2>
          <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" fontSize={10} axisLine={false} tickLine={false} />
                <YAxis fontSize={10} axisLine={false} tickLine={false} hide />
                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Line type="monotone" dataKey="revenue" stroke="#f49d25" strokeWidth={3} dot={{ r: 4, fill: '#f49d25' }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Category breakdown */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-4 border border-slate-100 dark:border-slate-700">
          <h2 className="font-bold text-lg mb-4">Top Categories</h2>
          <div className="space-y-4">
            {[
              { name: 'Electronics', amount: '$12.4k', width: '85%', color: 'bg-primary' },
              { name: 'Home & Decor', amount: '$8.2k', width: '60%', color: 'bg-accentBlue' },
              { name: 'Fashion', amount: '$6.1k', width: '45%', color: 'bg-green-500' },
            ].map((cat, i) => (
              <div key={i}>
                <div className="flex justify-between mb-1.5 text-xs font-semibold">
                  <span>{cat.name}</span>
                  <span>{cat.amount}</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                  <div className={`${cat.color} h-full rounded-full`} style={{ width: cat.width }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Alerts */}
        <div className="space-y-3">
          <h2 className="font-bold text-lg">Platform Alerts</h2>
          <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border-l-4 border-l-primary border border-slate-100 dark:border-slate-700">
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center"><span className="material-icons text-primary text-sm mr-2">verified_user</span><span className="text-xs font-bold uppercase text-slate-400">Moderation</span></div>
              <span className="text-[10px] text-slate-400">2m ago</span>
            </div>
            <h4 className="text-sm font-semibold mb-3">New seller application: "Urban Threads" requires review.</h4>
            <div className="flex space-x-2">
              <button className="flex-1 py-2 bg-primary text-white rounded-lg text-xs font-bold">Approve</button>
              <button className="flex-1 py-2 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-lg text-xs font-bold">Details</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
