import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import ProductDetails from './components/pages/ProductDetails';
import Cart from './components/pages/Cart';
import Header from './components/custom/Header';

function App() {
  return (
    <div>
      {/* Header will be displayed on every page */}
      <Header/>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
