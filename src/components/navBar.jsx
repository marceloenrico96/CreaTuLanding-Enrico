import React from 'react';
import CartWidget from './cartWidget';

const NavBar = () => {
  return (
    <nav className="NavBar">
      <div className="logo-title">
        <img src="../src/img/zalando-logo.png" alt="Logo Tienda" className="logo-tienda" />
        <h1>Zalando</h1>
      </div>
      <ul>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Tendencias</a></li>
        <li><a href="#">Ropa</a></li>
        <li><a href="#">Zapatillas</a></li>
        <li><a href="#">Accesorios</a></li>
        <li><a href="#">StreetWear</a></li>
        <li><a href="#">Deportes</a></li>
        
      </ul>
      <CartWidget />
      
    </nav>
    
  );
};

export default NavBar;
