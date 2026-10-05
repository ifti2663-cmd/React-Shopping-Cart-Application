import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try { return JSON.parse(localStorage.getItem('luma-cart')) ?? []; } catch { return []; }
  });

  useEffect(() => localStorage.setItem('luma-cart', JSON.stringify(items)), [items]);

  const addItem = (product) => setItems((current) => {
    const found = current.find((item) => item.id === product.id);
    return found
      ? current.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
      : [...current, { ...product, quantity: 1 }];
  });
  const updateQuantity = (id, change) => setItems((current) => current.flatMap((item) => {
    if (item.id !== id) return [item];
    const quantity = item.quantity + change;
    return quantity > 0 ? [{ ...item, quantity }] : [];
  }));
  const removeItem = (id) => setItems((current) => current.filter((item) => item.id !== id));

  const value = useMemo(() => ({
    items, addItem, updateQuantity, removeItem,
    itemCount: items.reduce((total, item) => total + item.quantity, 0),
    subtotal: items.reduce((total, item) => total + item.price * item.quantity, 0)
  }), [items]);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => useContext(CartContext);
