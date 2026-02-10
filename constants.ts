
import { Product } from './types';

export const PRODUCTS: Product[] = [
  // --- TECH & GADGETS ---
  {
    id: 'e1',
    name: 'Apple iPhone 15 Pro (128 GB) - Natural Titanium',
    brand: 'Apple',
    price: 127990,
    originalPrice: 134900,
    rating: 4.8,
    reviewCount: 15400,
    imageUrl: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&w=800&q=80',
    category: 'Tech',
    discount: '5%',
    status: 'Active',
    sku: 'IPH-15P-NAT',
    isTrending: true
  },
  {
    id: 'e2',
    name: 'Sony WH-1000XM5 Wireless Noise Cancelling Headphones',
    brand: 'Sony',
    price: 29990,
    originalPrice: 34990,
    rating: 4.9,
    reviewCount: 22000,
    imageUrl: 'https://images.unsplash.com/photo-1618366712277-721616c6ba61?auto=format&fit=crop&w=800&q=80',
    category: 'Tech',
    discount: '14%',
    status: 'Active',
    sku: 'SONY-XM5-BLK'
  },
  {
    id: 'e3',
    name: 'Samsung Galaxy Watch 6 Classic (LTE, 47mm)',
    brand: 'Samsung',
    price: 33999,
    originalPrice: 42999,
    rating: 4.5,
    reviewCount: 4200,
    imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
    category: 'Tech',
    discount: '21%',
    status: 'Active',
    sku: 'SAM-W6-CLASSIC'
  },
  {
    id: 'e5',
    name: 'ASUS ROG Zephyrus G14 Gaming Laptop (2024)',
    brand: 'ASUS',
    price: 164990,
    originalPrice: 189990,
    rating: 4.7,
    reviewCount: 850,
    imageUrl: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80',
    category: 'Tech',
    discount: '13%',
    status: 'Active',
    sku: 'ROG-Z-G14'
  },
  {
    id: 'e6',
    name: 'Logitech MX Master 3S Wireless Mouse',
    brand: 'Logitech',
    price: 9495,
    originalPrice: 10995,
    rating: 4.9,
    reviewCount: 15200,
    imageUrl: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80',
    category: 'Tech',
    discount: '14%',
    status: 'Active',
    sku: 'LOGI-MX3S'
  },

  // --- FASHION & WEAR ---
  {
    id: 'f1',
    name: 'Premium Silk Banarasi Saree with Golden Zari',
    brand: 'Vark',
    price: 8500,
    originalPrice: 12999,
    rating: 4.6,
    reviewCount: 340,
    imageUrl: 'https://images.unsplash.com/photo-1610030469618-d76060c2306d?auto=format&fit=crop&w=800&q=80',
    category: 'Fashion',
    discount: '35%',
    status: 'Active',
    sku: 'SAREE-BNR-01'
  },
  {
    id: 'f2',
    name: 'Floral Print Summer Maxi Dress - Navy',
    brand: 'Westside',
    price: 2499,
    originalPrice: 3999,
    rating: 4.4,
    reviewCount: 1200,
    imageUrl: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80',
    category: 'Fashion',
    discount: '37%',
    status: 'Active',
    sku: 'DRESS-MAX-02'
  },
  {
    id: 'f5',
    name: 'Men\'s Handcrafted Leather Loafers',
    brand: 'Bata Premium',
    price: 4999,
    originalPrice: 6999,
    rating: 4.5,
    reviewCount: 2300,
    imageUrl: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=800&q=80',
    category: 'Fashion',
    discount: '28%',
    status: 'Active',
    sku: 'BATA-LOAF-01'
  },
  {
    id: 'f6',
    name: 'Women\'s Solid Oversized Sweatshirt',
    brand: 'H&M',
    price: 1299,
    originalPrice: 1999,
    rating: 4.3,
    reviewCount: 8900,
    imageUrl: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80',
    category: 'Fashion',
    discount: '35%',
    status: 'Active',
    sku: 'HM-SWEAT-01'
  },

  // --- SPORTS & FITNESS ---
  {
    id: 's1',
    name: 'Nike Air Jordan 1 Retro High OG "Chicago"',
    brand: 'Nike',
    price: 18995,
    originalPrice: 22000,
    rating: 4.9,
    reviewCount: 4500,
    imageUrl: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80',
    category: 'Sports',
    discount: '13%',
    status: 'Active',
    sku: 'NIKE-AJ1-CHI',
    isTrending: true
  },
  {
    id: 's4',
    name: 'Smart Electric Folding Treadmill',
    brand: 'Sparnod',
    price: 24500,
    originalPrice: 45000,
    rating: 4.4,
    reviewCount: 1100,
    imageUrl: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80',
    category: 'Sports',
    discount: '45%',
    status: 'Active',
    sku: 'SPAR-TRED-01'
  },
  {
    id: 's5',
    name: 'Hydro Flask 32oz Wide Mouth Water Bottle',
    brand: 'Hydro Flask',
    price: 3499,
    rating: 4.9,
    reviewCount: 32000,
    imageUrl: 'https://images.unsplash.com/photo-1602143399827-bd9aa957383d?auto=format&fit=crop&w=800&q=80',
    category: 'Sports',
    status: 'Active',
    sku: 'HYDRO-32OZ'
  },

  // --- HOME & DECOR ---
  {
    id: 'h1',
    name: 'Minimalist Ceramic Table Lamp',
    brand: 'HomeCentre',
    price: 2499,
    originalPrice: 3999,
    rating: 4.4,
    reviewCount: 560,
    imageUrl: 'https://images.unsplash.com/photo-1507473884658-6697ec3160a8?auto=format&fit=crop&w=800&q=80',
    category: 'Home',
    discount: '37%',
    status: 'Active',
    sku: 'LAMP-CER-MIN'
  },
  {
    id: 'h3',
    name: 'Comfort Cloud Recliner Chair',
    brand: 'Wakefit',
    price: 12499,
    originalPrice: 18999,
    rating: 4.6,
    reviewCount: 450,
    imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
    category: 'Home',
    discount: '34%',
    status: 'Active',
    sku: 'WAKE-REC-01'
  },
  {
    id: 'h4',
    name: 'KitchenAid Artisan 5-Quart Stand Mixer',
    brand: 'KitchenAid',
    price: 48990,
    rating: 4.9,
    reviewCount: 18500,
    imageUrl: 'https://images.unsplash.com/photo-1594385208934-27a599be00c8?auto=format&fit=crop&w=800&q=80',
    category: 'Home',
    status: 'Active',
    sku: 'KA-MIXER-5Q'
  },

  // --- BEAUTY & HEALTH ---
  {
    id: 'b1',
    name: 'Hydrating Face Serum with Vitamin C',
    brand: 'Minimalist',
    price: 599,
    originalPrice: 799,
    rating: 4.6,
    reviewCount: 45000,
    imageUrl: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80',
    category: 'Beauty',
    discount: '25%',
    status: 'Active',
    sku: 'MIN-SERUM-VITC'
  },
  {
    id: 'b3',
    name: 'Dyson Airwrap Multi-Styler',
    brand: 'Dyson',
    price: 45900,
    rating: 4.8,
    reviewCount: 3200,
    imageUrl: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?auto=format&fit=crop&w=800&q=80',
    category: 'Beauty',
    status: 'Active',
    sku: 'DYSON-AIR-01'
  },
  {
    id: 'b4',
    name: 'Organic Lavender Essential Oil',
    brand: 'Soulflower',
    price: 450,
    originalPrice: 650,
    rating: 4.5,
    reviewCount: 1200,
    imageUrl: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80',
    category: 'Beauty',
    discount: '30%',
    status: 'Active',
    sku: 'SOUL-LAV-OIL'
  },

  // --- GROCERY & MORE ---
  {
    id: 'g1',
    name: 'Premium Roast Arabica Coffee Beans (500g)',
    brand: 'Blue Tokai',
    price: 745,
    originalPrice: 850,
    rating: 4.7,
    reviewCount: 5600,
    imageUrl: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=800&q=80',
    category: 'Grocery',
    discount: '12%',
    status: 'Active',
    sku: 'BT-COFFEE-500'
  },
  {
    id: 'g2',
    name: 'Himalayan Pink Salt (1kg)',
    brand: 'Tata Sampann',
    price: 120,
    originalPrice: 150,
    rating: 4.9,
    reviewCount: 25000,
    imageUrl: 'https://images.unsplash.com/photo-1518110925495-5fe2fda0442c?auto=format&fit=crop&w=800&q=80',
    category: 'Grocery',
    discount: '20%',
    status: 'Active',
    sku: 'TATA-SALT-1K'
  }
];

export const CATEGORIES = [
  { name: 'Tech', icon: 'devices', color: 'text-blue-500' },
  { name: 'Fashion', icon: 'checkroom', color: 'text-pink-500' },
  { name: 'Home', icon: 'chair', color: 'text-green-500' },
  { name: 'Sports', icon: 'fitness_center', color: 'text-red-500' },
  { name: 'Beauty', icon: 'face', color: 'text-purple-500' },
  { name: 'Grocery', icon: 'shopping_basket', color: 'text-orange-500' },
];

export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value);
};
