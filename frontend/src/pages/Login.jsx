export default function Login() {
  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Giriş Yap</h1>
      <form>
        <input className="w-full border p-2 mb-3" placeholder="E-posta" />
        <input className="w-full border p-2 mb-3" placeholder="Şifre" type="password" />
        <button type="button" className="w-full bg-blue-500 text-white p-2 rounded">Giriş</button>
      </form>
    </div>
  );
}
