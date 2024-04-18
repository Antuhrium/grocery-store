import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import CartPage from "./pages/CartPage";
import ShopPage from "./pages/ShopPage";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="w-full min-h-[100vh] flex flex-col justify-between">
      <NavBar />
      <Routes>
        <Route path="/" element={<ShopPage />} />
        <Route path="/shopping-cart" element={<CartPage />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
