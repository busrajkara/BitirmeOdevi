import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">YemekSepetim</Link>
        <div className="flex gap-4 items-center">
          <Link to="/products" className="hover:underline">Ürünler</Link>
          <Link to="/cart" className="hover:underline">Sepet</Link>
          <Link to="/login" className="bg-blue-500 text-white px-3 py-1 rounded">Giriş</Link>
        </div>
      </div>
    </nav>
  );
}
