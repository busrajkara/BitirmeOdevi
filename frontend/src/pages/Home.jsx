// src/pages/Home.jsx
import React from "react";

function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Bitirme Ödevi - Ana Sayfa
      </h1>
      <p className="text-gray-700 text-lg text-center max-w-xl">
        Bu proje, React ve Node.js kullanılarak geliştirilmiş bir tam stack web uygulamasıdır. 
        Şu anda frontend kısmındayız, backend daha sonra eklenecek. 🚀
      </p>

      <button className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
        Ürünleri Gör
      </button>
    </div>
  );
}

export default Home;
