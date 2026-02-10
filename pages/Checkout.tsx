
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const { cartTotal } = useCart();
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('card');

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      navigate('/track');
    }
  };

  return (
    <div className="bg-backgroundLight dark:bg-backgroundDark min-h-screen">
      <header className="sticky top-0 z-30 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-primary/10 px-4 py-3 flex items-center justify-between">
        <button onClick={() => navigate(-1)} className="w-10 h-10 flex items-center justify-start text-slate-600">
          <span className="material-icons">arrow_back_ios</span>
        </button>
        <h1 className="text-lg font-semibold">
          {step === 1 ? 'Shipping' : step === 2 ? 'Payment' : 'Review'}
        </h1>
        <div className="w-10"></div>
      </header>

      <main className="pb-40">
        <nav className="px-6 py-8">
          <div className="relative flex items-center justify-between">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2"></div>
            <div 
              className="absolute top-1/2 left-0 h-0.5 bg-primary -translate-y-1/2 transition-all duration-300"
              style={{ width: step === 1 ? '0%' : step === 2 ? '50%' : '100%' }}
            ></div>
            {[
              { id: 1, icon: 'location_on', label: 'Address' },
              { id: 2, icon: 'payments', label: 'Payment' },
              { id: 3, icon: 'fact_check', label: 'Review' }
            ].map(s => (
              <div key={s.id} className="relative flex flex-col items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white ring-4 ring-white dark:ring-slate-900 transition-colors ${step >= s.id ? 'bg-primary' : 'bg-gray-200'}`}>
                  <span className="material-icons text-sm">{s.icon}</span>
                </div>
                <span className={`text-[10px] font-bold uppercase tracking-wider ${step >= s.id ? 'text-primary' : 'text-gray-400'}`}>{s.label}</span>
              </div>
            ))}
          </div>
        </nav>

        {step === 1 && (
          <section className="px-4 space-y-4 animate-in fade-in slide-in-from-right-5">
            <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest">Shipping Address</h2>
            <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border-2 border-primary bg-primary/5 relative">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                  <span className="font-bold">Alex Thompson</span>
                  <span className="px-2 py-0.5 text-[10px] bg-primary text-white rounded-full font-bold uppercase">Home</span>
                </div>
                <button className="text-gray-400"><span className="material-icons text-lg">edit</span></button>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                452 Market Street, Apt 4B<br/>San Francisco, CA 94103
              </p>
              <div className="absolute top-4 right-10"><span className="material-icons text-primary">check_circle</span></div>
            </div>
            
            <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest mt-8">Delivery Method</h2>
            <div className="p-4 bg-white dark:bg-slate-800 rounded-xl ring-1 ring-black/5 flex items-center cursor-pointer border-2 border-primary/20">
              <input checked readOnly type="radio" className="w-5 h-5 text-primary focus:ring-primary" />
              <div className="ml-4 flex-1">
                <div className="flex justify-between"><span className="font-semibold">Standard Delivery</span><span className="font-bold text-primary">Free</span></div>
                <p className="text-xs text-gray-500">Delivered by Oct 24 - Oct 26</p>
              </div>
            </div>
          </section>
        )}

        {step === 2 && (
          <section className="px-4 space-y-4 animate-in fade-in slide-in-from-right-5">
            <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest">Payment Method</h2>
            <div 
              onClick={() => setPaymentMethod('card')}
              className={`p-4 bg-white dark:bg-slate-800 rounded-xl flex items-center cursor-pointer border-2 transition-all ${paymentMethod === 'card' ? 'border-primary bg-primary/5' : 'border-transparent shadow-sm'}`}
            >
              <span className="material-icons text-primary mr-3">credit_card</span>
              <div className="flex-1">
                <span className="font-semibold block">Credit / Debit Card</span>
                <span className="text-xs text-slate-500">Visa, Mastercard, Amex</span>
              </div>
              {paymentMethod === 'card' && <span className="material-icons text-primary">check_circle</span>}
            </div>
            <div 
              onClick={() => setPaymentMethod('paypal')}
              className={`p-4 bg-white dark:bg-slate-800 rounded-xl flex items-center cursor-pointer border-2 transition-all ${paymentMethod === 'paypal' ? 'border-primary bg-primary/5' : 'border-transparent shadow-sm'}`}
            >
              <span className="material-icons text-blue-500 mr-3">account_balance_wallet</span>
              <div className="flex-1">
                <span className="font-semibold block">PayPal</span>
                <span className="text-xs text-slate-500">Fast and secure</span>
              </div>
              {paymentMethod === 'paypal' && <span className="material-icons text-primary">check_circle</span>}
            </div>
          </section>
        )}

        {step === 3 && (
          <section className="px-4 space-y-6 animate-in fade-in slide-in-from-right-5">
             <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl text-center space-y-4 shadow-sm">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                   <span className="material-icons text-primary text-3xl">task_alt</span>
                </div>
                <h3 className="text-xl font-bold">Review Your Order</h3>
                <p className="text-sm text-slate-500">Please check all details before confirming your purchase.</p>
             </div>
             
             <div className="space-y-3">
                <div className="flex justify-between items-center text-sm bg-white dark:bg-slate-800 p-4 rounded-xl">
                   <span className="text-slate-500">Items Subtotal</span>
                   <span className="font-bold">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center text-sm bg-white dark:bg-slate-800 p-4 rounded-xl">
                   <span className="text-slate-500">Shipping Fee</span>
                   <span className="text-green-500 font-bold">FREE</span>
                </div>
             </div>
          </section>
        )}
      </main>

      <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-900 border-t border-primary/10 px-6 pt-4 pb-12 shadow-[0_-10px_30px_-15px_rgba(0,0,0,0.1)] z-[60]">
        <div className="flex items-center justify-between mb-4">
          <div className="text-2xl font-bold">${cartTotal.toFixed(2)}</div>
          <div className="text-right text-[10px] uppercase font-bold text-green-500">Guaranteed Delivery</div>
        </div>
        <button 
          onClick={handleNext}
          className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center gap-2 active:scale-95 transition-transform"
        >
          {step === 3 ? 'Confirm Order' : 'Next Step'} <span className="material-icons">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};

export default Checkout;
