import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Geçici: backend hazır olunca buraya axios/fetch çağrısı koyacağız
    setProducts([
      { id:1, name:"Ev Yemeği - Mercimek Çorbası", price:30 },
      { id:2, name:"Ev Yemeği - Mantı", price:50 },
    ]);
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Ürünler</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map(p => (
          <div key={p.id} className="border p-4 rounded">
            <h2 className="font-semibold">{p.name}</h2>
            <p className="mt-2">{p.price}₺</p>
            <button className="mt-3 bg-green-500 text-white px-3 py-1 rounded">Sepete Ekle</button>
          </div>
        ))}
      </div>
    </div>
  );
}
