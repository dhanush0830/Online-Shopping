
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PRODUCTS, formatCurrency } from '../constants';
import { useCart } from '../context/CartContext';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = PRODUCTS.find(p => p.id === id);
  const [selectedSize, setSelectedSize] = useState('8');
  const [added, setAdded] = useState(false);

  if (!product) return <div>Product not found</div>;

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="animate-in fade-in duration-500 pb-32">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-backgroundDark/95 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800 px-4 py-3 flex items-center justify-between">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2"><span className="material-icons">arrow_back</span></button>
        <div className="flex items-center gap-4">
           <span className="material-icons text-slate-600">search</span>
           <span className="material-icons text-slate-600" onClick={() => navigate('/cart')}>shopping_cart</span>
        </div>
      </header>

      <main className="pt-16">
        <div className="relative w-full aspect-square bg-white dark:bg-slate-900 overflow-hidden">
          <img className="w-full h-full object-contain p-6" src={product.imageUrl} alt={product.name} />
          <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 border border-slate-200 flex items-center justify-center text-slate-400">
            <span className="material-icons">favorite_border</span>
          </button>
        </div>

        <div className="px-4 py-4 bg-white dark:bg-slate-800">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-accentBlue uppercase tracking-wider">{product.brand}</span>
            <div className="flex items-center text-white bg-green-700 px-2 py-0.5 rounded text-xs font-bold">
               {product.rating} <span className="material-icons text-[10px] ml-0.5">star</span>
            </div>
          </div>
          <h1 className="text-lg font-medium leading-tight mt-1 mb-2 text-slate-800 dark:text-slate-200">{product.name}</h1>
          
          <div className="flex items-baseline space-x-2 mt-4">
            <span className="text-3xl font-black">{formatCurrency(product.price)}</span>
            {product.originalPrice && (
              <>
                <span className="text-sm text-slate-400 line-through">{formatCurrency(product.originalPrice)}</span>
                <span className="text-sm font-bold text-green-600">{product.discount} off</span>
              </>
            )}
          </div>
          <p className="text-[10px] text-slate-500 font-bold mt-1">Inclusive of all taxes</p>
        </div>

        {/* Offers Section */}
        <div className="px-4 py-4 mt-2 bg-white dark:bg-slate-800 space-y-3">
           <h3 className="text-sm font-bold">Bank Offers</h3>
           <div className="flex items-start gap-2">
              <span className="material-icons text-green-600 text-sm mt-0.5">local_offer</span>
              <p className="text-xs text-slate-600 dark:text-slate-400">Flat ₹2,500 Off on HDFC Bank Credit Card Transactions</p>
           </div>
           <div className="flex items-start gap-2">
              <span className="material-icons text-green-600 text-sm mt-0.5">local_offer</span>
              <p className="text-xs text-slate-600 dark:text-slate-400">10% Instant Discount on SBI Credit Cards</p>
           </div>
        </div>

        {product.category === 'Fashion' || product.category === 'Sports' ? (
          <div className="px-4 py-6 mt-2 bg-white dark:bg-slate-800">
            <h3 className="text-sm font-bold mb-4">Select Size</h3>
            <div className="flex gap-4">
              {['6', '7', '8', '9', '10'].map(size => (
                <button 
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-12 h-12 rounded-full border-2 flex items-center justify-center font-bold text-sm transition-all ${selectedSize === size ? 'border-primary bg-primary/5 text-primary' : 'border-slate-200'}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        ) : null}

        <div className="px-4 py-6 mt-2 bg-white dark:bg-slate-800 mb-20">
           <h3 className="text-sm font-bold mb-4">Product Details</h3>
           <div className="grid grid-cols-2 gap-y-4 text-xs">
              <div className="text-slate-500">Model Name</div>
              <div className="font-medium">{product.sku}</div>
              <div className="text-slate-500">Color</div>
              <div className="font-medium">Standard</div>
              <div className="text-slate-500">In the Box</div>
              <div className="font-medium">1 Unit Product, Manual, Warranty Card</div>
           </div>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 p-3 flex gap-3 z-[60] shadow-2xl">
        <button 
          onClick={handleAddToCart}
          className={`flex-1 py-4 font-black rounded text-sm uppercase tracking-widest transition-all ${added ? 'bg-green-600 text-white' : 'bg-white border-2 border-slate-200 text-slate-800'}`}
        >
          {added ? 'Go to Cart' : 'Add to Cart'}
        </button>
        <button 
          onClick={() => {
            addToCart(product);
            navigate('/checkout');
          }}
          className="flex-1 py-4 bg-primary text-white font-black rounded text-sm uppercase tracking-widest shadow-lg shadow-primary/20"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
