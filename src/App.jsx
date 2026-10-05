import { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import ProductGrid from './components/ProductGrid';
import Cart from './components/Cart';
import { categories, products } from './data/products';

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [category, setCategory] = useState('All');
  const visibleProducts = useMemo(() => category === 'All' ? products : products.filter((product) => product.category === category), [category]);
  return <main id="top"><Navbar onCartOpen={() => setCartOpen(true)} /><section className="hero"><p>Objects for a softer life</p><h1>Everyday, <em>elevated.</em></h1><div><span>01 — 08</span><a href="#shop">Explore collection <b>↓</b></a></div></section><section className="intro" id="about"><p>Thoughtfully chosen</p><h2>Good design is a quiet<br />kind of <em>joy.</em></h2><p>We collect useful, beautiful things made to live with you - from the first cup of coffee to the final light at night.</p></section><section className="shop" id="shop"><div className="section-head"><div><p>The collection</p><h2>Made for the everyday.</h2></div><span>{visibleProducts.length} objects</span></div><div className="filters" role="tablist">{categories.map((item) => <button key={item} onClick={() => setCategory(item)} className={item === category ? 'active' : ''}>{item}</button>)}</div><ProductGrid products={visibleProducts} /></section><section className="closing"><p>Slow living, thoughtfully made.</p><h2>Bring a little<br /><em>more beautiful</em> home.</h2><a href="#shop">Shop the collection →</a></section><footer><a className="brand" href="#top">LUMA<span>.</span></a><p>Objects for a softer life.</p><span>© 2026 Luma Goods</span></footer><Cart open={cartOpen} onClose={() => setCartOpen(false)} /></main>;
}
