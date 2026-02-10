
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PRODUCTS, formatCurrency } from '../constants';

const SellerInventory: React.FC = () => {
  const navigate = useNavigate();
  const [inventory, setInventory] = useState(PRODUCTS);
  const [searchTerm, setSearchTerm] = useState('');
  const [isAdding, setIsAdding] = useState(false);

  const filteredInventory = inventory.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.sku?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleStatus = (id: string) => {
    setInventory(prev => prev.map(p => 
      p.id === id ? { ...p, status: p.status === 'Active' ? 'Out of Stock' : 'Active' } : p
    ));
  };

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would hit an API. Here we just mock it.
    alert('Product added successfully to your catalog!');
    setIsAdding(false);
  };

  return (
    <div className="bg-slate-50 dark:bg-backgroundDark min-h-screen pb-24">
      <header className="px-5 py-6 flex flex-col gap-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md sticky top-0 z-20 border-b border-slate-200 dark:border-slate-800">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-black tracking-tight uppercase">Inventory</h1>
            <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">{inventory.length} Listing Active</p>
          </div>
          <div className="flex gap-2">
            <button onClick={() => navigate('/seller')} className="p-2 text-slate-400"><span className="material-icons">arrow_back</span></button>
            <button 
              onClick={() => setIsAdding(true)}
              className="bg-primary text-white p-3 rounded-full shadow-lg shadow-primary/40 active:scale-95 transition-transform"
            >
              <span className="material-icons">add</span>
            </button>
          </div>
        </div>
        <div className="relative">
          <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
          <input 
            className="w-full pl-10 pr-4 py-2.5 bg-slate-100 dark:bg-slate-800 border-none rounded-lg text-xs font-bold" 
            placeholder="Search by Product name or SKU..." 
            type="text" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </header>

      <main className="p-4 space-y-4">
        {filteredInventory.map(product => (
          <div key={product.id} className="bg-white dark:bg-slate-900 p-4 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 animate-in fade-in slide-in-from-bottom-2">
            <div className="flex gap-4 mb-4">
              <div className="w-20 h-20 rounded-lg overflow-hidden border border-slate-100 dark:border-slate-800">
                 <img className="w-full h-full object-cover" src={product.imageUrl} alt={product.name} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                  <button 
                    onClick={() => toggleStatus(product.id)}
                    className={`inline-flex items-center px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-widest transition-colors ${product.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}
                  >
                    {product.status || 'Active'}
                  </button>
                  <button className="text-slate-400"><span className="material-icons text-sm">more_vert</span></button>
                </div>
                <h3 className="font-bold text-slate-800 dark:text-slate-200 mt-1 truncate text-sm">{product.name}</h3>
                <p className="text-[10px] text-slate-500 font-black uppercase mt-0.5">SKU: {product.sku}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-100 dark:border-slate-800">
              <div className="space-y-1">
                <label className="text-[9px] text-slate-400 font-black uppercase tracking-wider">Price (₹)</label>
                <div className="relative">
                   <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">₹</span>
                   <input 
                     className="w-full text-xs font-bold bg-slate-50 dark:bg-slate-800 border-none rounded-lg h-10 pl-7 pr-3" 
                     type="number" 
                     defaultValue={product.price} 
                   />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-[9px] text-slate-400 font-black uppercase tracking-wider">Stock Qty</label>
                <input 
                  className={`w-full text-xs font-bold bg-slate-50 dark:bg-slate-800 border-none rounded-lg h-10 px-3 ${product.status === 'Out of Stock' ? 'text-red-500' : 'text-green-600'}`} 
                  type="number" 
                  defaultValue={product.status === 'Out of Stock' ? 0 : 42} 
                />
              </div>
            </div>

            <div className="flex gap-2 mt-4 pt-4 border-t border-slate-50 dark:border-slate-800">
               <button className="flex-1 py-2 text-[10px] font-black uppercase tracking-widest text-slate-500 bg-slate-50 dark:bg-slate-800 rounded active:bg-slate-100">Deactivate</button>
               <button className="flex-1 py-2 text-[10px] font-black uppercase tracking-widest text-primary bg-primary/10 rounded active:bg-primary/20">Quick Edit</button>
            </div>
          </div>
        ))}
      </main>

      {/* Add Product Modal (Slide-up) */}
      <div className={`fixed inset-0 z-50 transition-opacity duration-300 ${isAdding ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsAdding(false)} />
        <div className={`absolute bottom-0 left-0 right-0 bg-white dark:bg-slate-900 rounded-t-3xl p-6 transition-transform duration-500 transform ${isAdding ? 'translate-y-0' : 'translate-y-full'}`}>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-black uppercase italic tracking-tighter">Add New Product</h2>
            <button onClick={() => setIsAdding(false)}><span className="material-icons">close</span></button>
          </div>
          <form onSubmit={handleAddProduct} className="space-y-4">
             <div className="space-y-1">
               <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Product Name</label>
               <input required className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-xl py-3 px-4 text-sm" placeholder="e.g. Premium Leather Belt" />
             </div>
             <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Price (₹)</label>
                  <input required type="number" className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-xl py-3 px-4 text-sm" placeholder="₹" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Category</label>
                  <select className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-xl py-3 px-4 text-sm">
                    <option>Fashion</option>
                    <option>Tech</option>
                    <option>Home</option>
                  </select>
                </div>
             </div>
             <button type="submit" className="w-full bg-primary text-white font-black uppercase py-4 rounded-xl shadow-lg shadow-primary/30 mt-4">Publish Listing</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SellerInventory;
