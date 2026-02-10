
import React, { useMemo, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { PRODUCTS, formatCurrency } from '../constants';
import { useCart } from '../context/CartContext';

type SortType = 'relevance' | 'priceLow' | 'priceHigh' | 'rating';

const ProductListing: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { addToCart } = useCart();
  
  const [sortBy, setSortBy] = useState<SortType>('relevance');
  const [showFastDeliveryOnly, setShowFastDeliveryOnly] = useState(false);
  
  const categoryParam = searchParams.get('category');
  const queryParam = searchParams.get('q');

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    // Search and Category Filter
    if (categoryParam && categoryParam !== 'More') {
      result = result.filter(p => p.category === categoryParam);
    }
    if (queryParam) {
      const q = queryParam.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.brand.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      );
    }

    // "Fast Delivery" (Prime) Filter Logic
    if (showFastDeliveryOnly) {
      result = result.filter(p => p.isTrending || p.rating > 4.5); // Mocked logic
    }

    // Sorting Logic
    if (sortBy === 'priceLow') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'priceHigh') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [categoryParam, queryParam, sortBy, showFastDeliveryOnly]);

  return (
    <div className="animate-in slide-in-from-right duration-300 pb-20">
      <header className="sticky top-0 z-50 bg-white dark:bg-backgroundDark border-b border-slate-200 dark:border-slate-800">
        <div className="px-4 pt-4 pb-2 flex items-center justify-between">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-slate-600 dark:text-slate-400">
            <span className="material-icons">arrow_back</span>
          </button>
          <div className="flex-1 px-2">
             <div className="relative">
                <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
                <input 
                  className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-lg py-1.5 pl-8 pr-4 text-xs font-bold" 
                  placeholder="Search Marketplace" 
                  defaultValue={queryParam || ''}
                  type="text"
                />
             </div>
          </div>
          <button onClick={() => navigate('/cart')} className="p-2 text-slate-600 dark:text-slate-400 relative">
            <span className="material-icons">shopping_cart</span>
          </button>
        </div>
        
        {/* Real Filter Bar */}
        <div className="px-4 py-2 flex space-x-3 text-[10px] font-black uppercase tracking-widest overflow-x-auto hide-scrollbar border-t border-slate-50 dark:border-slate-800/50">
          <button 
            onClick={() => setShowFastDeliveryOnly(!showFastDeliveryOnly)}
            className={`flex items-center gap-1 border px-3 py-1.5 rounded-full transition-colors whitespace-nowrap ${showFastDeliveryOnly ? 'bg-primary text-white border-primary' : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500'}`}
          >
            <span className="material-icons text-xs">bolt</span> Fast Delivery
          </button>
          
          <div className="flex items-center gap-1 border border-slate-200 dark:border-slate-700 px-3 py-1.5 rounded-full bg-white dark:bg-slate-800 text-slate-500 whitespace-nowrap">
            <select 
              className="bg-transparent border-none p-0 text-[10px] font-black uppercase focus:ring-0 cursor-pointer"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortType)}
            >
              <option value="relevance">Sort: Relevance</option>
              <option value="priceLow">Price: Low to High</option>
              <option value="priceHigh">Price: High to Low</option>
              <option value="rating">Rating: High to Low</option>
            </select>
          </div>
        </div>
      </header>

      <main className="px-4 py-4">
        <div className="mb-6 flex justify-between items-baseline">
          <p className="text-[10px] text-slate-400 uppercase tracking-[0.2em] font-black">
            {filteredProducts.length} Results
          </p>
          <span className="text-[10px] font-bold text-accentBlue uppercase tracking-tighter">
            {sortBy === 'relevance' ? 'Best Match' : sortBy.replace(/([A-Z])/g, ' $1')}
          </span>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 gap-x-4 gap-y-8">
            {filteredProducts.map(product => (
              <div 
                key={product.id}
                onClick={() => navigate(`/product/${product.id}`)}
                className="flex flex-col cursor-pointer group"
              >
                <div className="relative aspect-[3/4] bg-slate-100 dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800">
                  <img 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    src={product.imageUrl} 
                    alt={product.name}
                    loading="lazy"
                  />
                  {product.discount && (
                    <div className="absolute top-3 left-3 bg-red-600 text-white text-[8px] font-black px-2 py-1 uppercase rounded shadow-lg">
                      {product.discount} OFF
                    </div>
                  )}
                  <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-white/50 flex items-center justify-center text-slate-400">
                    <span className="material-icons text-lg">favorite_border</span>
                  </button>
                </div>
                <div className="pt-3 flex-1 flex flex-col">
                  <h3 className="text-xs font-bold line-clamp-2 leading-tight text-slate-800 dark:text-slate-200 h-8">{product.name}</h3>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex items-center text-white bg-green-700 px-1.5 py-0.5 rounded text-[9px] font-bold">
                      {product.rating} <span className="material-icons text-[8px] ml-0.5">star</span>
                    </div>
                    <span className="text-[10px] text-slate-400 font-medium">({product.reviewCount})</span>
                  </div>
                  <div className="mt-3">
                    <div className="flex items-baseline space-x-1">
                      <span className="text-sm font-black">{formatCurrency(product.price)}</span>
                      {product.originalPrice && <span className="text-[10px] text-slate-400 line-through">{formatCurrency(product.originalPrice)}</span>}
                    </div>
                    {product.rating > 4.5 && <p className="text-[10px] text-primary font-bold mt-0.5 uppercase tracking-widest">Nexus Choice</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4">
               <span className="material-icons text-4xl text-slate-300">search_off</span>
            </div>
            <h3 className="text-lg font-bold">No results found</h3>
            <p className="text-slate-500 text-sm mt-2 px-6">Try adjusting your filters or search terms.</p>
            <button 
              onClick={() => {
                setShowFastDeliveryOnly(false);
                setSortBy('relevance');
              }}
              className="mt-6 text-primary font-bold text-sm uppercase tracking-widest"
            >
              Clear all filters
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default ProductListing;
