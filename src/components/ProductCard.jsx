import { ArrowIcon } from './Icons';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { addItem } = useCart();
  return <article className="product-card"><div className="product-image"><img src={product.image} alt={product.title} loading="lazy" /><button onClick={() => addItem(product)} aria-label={`Add ${product.title} to bag`}><ArrowIcon /></button></div><div className="product-meta"><div><p>{product.category}</p><h3>{product.title}</h3></div><strong>${product.price}</strong></div></article>;
}
