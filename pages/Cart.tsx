
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart: React.FC = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center animate-in fade-in duration-500">
        <div className="w-24 h-24 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-6">
          <span className="material-icons text-5xl text-slate-300">shopping_bag</span>
        </div>
        <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
        <p className="text-slate-500 mb-8">Looks like you haven't added anything to your cart yet.</p>
        <button 
          onClick={() => navigate('/listing')}
          className="bg-primary text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-primary/20"
        >
          Start Shopping
        </button>
      </div>
    );
  }

  // Group by vendor (simplified for mockup)
  const vendors = Array.from(new Set(cart.map(item => item.vendor)));

  return (
    <div className="animate-in slide-in-from-bottom duration-300">
      <header className="sticky top-0 z-30 bg-backgroundLight/80 dark:bg-backgroundDark/80 backdrop-blur-md px-4 py-3 flex items-center border-b border-primary/10">
        <button onClick={() => navigate(-1)} className="p-1 -ml-1"><span className="material-icons text-2xl">arrow_back_ios</span></button>
        <div className="flex-1 text-center pr-6">
          <h1 className="text-lg font-bold">Shopping Cart</h1>
          <p className="text-xs text-slate-500 dark:text-slate-400">{cart.length} Items</p>
        </div>
      </header>

      <main className="px-4 pt-4 pb-40">
        <div className="space-y-6">
          {vendors.map(vendor => (
            <section key={vendor}>
              <div className="flex items-center gap-2 mb-3">
                <span className="material-icons text-primary text-sm">storefront</span>
                <h2 className="font-semibold text-sm">{vendor}</h2>
              </div>
              <div className="space-y-4">
                {cart.filter(item => item.vendor === vendor).map(item => (
                  <div key={item.id} className="bg-white dark:bg-slate-900/40 p-3 rounded-xl shadow-sm flex gap-4">
                    <div className="w-24 h-24 rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-800 flex-shrink-0">
                      <img className="w-full h-full object-cover" src={item.imageUrl} alt={item.name} />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h3 className="font-medium text-sm line-clamp-2">{item.name}</h3>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-slate-400 dark:text-slate-600"
                          >
                            <span className="material-icons text-lg">delete_outline</span>
                          </button>
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{item.brand}</p>
                      </div>
                      <div className="flex justify-between items-end mt-2">
                        <span className="font-bold text-primary">${item.price}</span>
                        <div className="flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg p-1">
                          <button 
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-7 h-7 flex items-center justify-center text-slate-500"
                          >
                            <span className="material-icons text-sm">remove</span>
                          </button>
                          <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-7 h-7 flex items-center justify-center text-primary"
                          >
                            <span className="material-icons text-sm">add</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-10">
          <div className="bg-white dark:bg-slate-900/40 p-4 rounded-xl shadow-sm space-y-3">
            <h2 className="font-bold mb-1">Order Summary</h2>
            <div className="flex justify-between text-sm">
              <span className="text-slate-500 dark:text-slate-400">Subtotal</span>
              <span className="font-medium">${cartTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-500 dark:text-slate-400">Shipping</span>
              <span className="font-medium text-green-600">FREE</span>
            </div>
            <div className="border-t border-slate-100 dark:border-slate-800 pt-3 flex justify-between">
              <span className="font-bold">Total Amount</span>
              <span className="font-bold text-lg text-primary">${cartTotal.toFixed(2)}</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 z-40 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 px-6 pt-4 pb-20">
        <div className="max-w-md mx-auto flex items-center justify-between gap-6">
          <div className="flex flex-col">
            <span className="text-xs text-slate-500 dark:text-slate-400">Grand Total</span>
            <span className="text-xl font-bold text-primary">${cartTotal.toFixed(2)}</span>
          </div>
          <button 
            onClick={() => navigate('/checkout')}
            className="flex-1 bg-primary text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
          >
            <span>Checkout</span>
            <span className="material-icons text-lg">arrow_forward</span>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Cart;
