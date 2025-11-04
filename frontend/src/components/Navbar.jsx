import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <h1 className="nav-logo">BitirmeProjesi</h1>

          <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
            <li><a href="/">Anasayfa</a></li>
            <li><a href="/kategori">Kategoriler</a></li>
            <li><a href="/hakkimizda">Hakkımızda</a></li>
            <li><a href="/iletisim">İletişim</a></li>
          </ul>

          <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>

      <style>{`
       /* Navbar genel stil */
.navbar {
  background-color: #f5f5f5; /* açık gri */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 0 0 12px 12px; /* alt köşeleri yumuşat */
  padding: 10px 0;
  position: sticky;
  top: 0;
  z-index: 100;
}

/* Container */
.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}

/* Logo */
.nav-logo {
  font-size: 1.5rem;
  color: #333;
  font-weight: 700;
  letter-spacing: 1px;
}

/* Menü */
.nav-menu {
  display: flex;
  gap: 30px;
  list-style: none;
  transition: all 0.3s ease;
}

.nav-menu li a {
  color: #444;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-menu li a:hover {
  color: #000;
}

/* Hamburger menü */
.nav-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 5px;
}

.bar {
  width: 25px;
  height: 3px;
  background-color: #333;
  border-radius: 5px;
}

/* Responsive (mobil görünüm) */
@media (max-width: 768px) {
  .nav-toggle {
    display: flex;
  }

  .nav-menu {
    position: absolute;
    top: 60px;
    right: 0;
    background: #f5f5f5;
    flex-direction: column;
    width: 200px;
    padding: 15px 0;
    border-radius: 0 0 12px 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    opacity: 0;
    transform: translateY(-10px);
    pointer-events: none;
  }

  .nav-menu.active {
    opacity: 1;
    transform: translateY(0);
    pointer-events: all;
  }

  .nav-menu li {
    text-align: center;
    padding: 10px 0;
  }
}

      `}</style>
    </>
  );
};

export default Navbar;
