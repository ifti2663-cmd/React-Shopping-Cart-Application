import { BagIcon } from './Icons';
import { useCart } from '../context/CartContext';

export default function Navbar({ onCartOpen }) {
  const { itemCount } = useCart();
  return <header className="nav"><a className="brand" href="#top">LUMA<span>.</span></a><nav><a href="#shop">Shop</a><a href="#about">Our story</a></nav><button className="bag-button" onClick={onCartOpen} aria-label={`Open bag, ${itemCount} items`}><BagIcon /><span>Bag</span>{itemCount > 0 && <b>{itemCount}</b>}</button></header>;
}
