
export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  category: string;
  isTrending?: boolean;
  salesCount?: string;
  discount?: string;
  status?: 'Active' | 'Out of Stock' | 'Pending Review';
  sku?: string;
}

export interface CartItem extends Product {
  quantity: number;
  vendor: string;
}

export interface VendorGroup {
  name: string;
  items: CartItem[];
}

export type ViewType = 'buyer' | 'seller' | 'admin';
