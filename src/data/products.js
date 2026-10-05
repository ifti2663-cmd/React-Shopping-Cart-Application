export const products = [
  { id: 1, title: 'Ripple Glass', category: 'Drinkware', price: 28, color: 'Sand', image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=900&q=85' },
  { id: 2, title: 'Arc Table Lamp', category: 'Lighting', price: 94, color: 'Porcelain', image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=85' },
  { id: 3, title: 'Canvas Carryall', category: 'Accessories', price: 56, color: 'Natural', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85' },
  { id: 4, title: 'Column Vase', category: 'Objects', price: 42, color: 'Dove', image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=900&q=85' },
  { id: 5, title: 'Sunday Throw', category: 'Textiles', price: 78, color: 'Oat', image: 'https://images.unsplash.com/photo-1583845112203-454c48d8bb2c?auto=format&fit=crop&w=900&q=85' },
  { id: 6, title: 'Mori Side Chair', category: 'Furniture', price: 168, color: 'Olive', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=85' },
  { id: 7, title: 'Stoneware Bowl', category: 'Tableware', price: 34, color: 'Clay', image: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=900&q=85' },
  { id: 8, title: 'Form Wall Hook', category: 'Objects', price: 18, color: 'Brass', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=85' }
];

export const categories = ['All', ...new Set(products.map((product) => product.category))];
