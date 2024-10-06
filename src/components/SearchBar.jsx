import { Link } from "react-router-dom";
import './Navbar.scss'

const SearchBar = () => {
  return (
    <div className="search-bar">
       <div className="search-bar__logo-container"><img className="search-bar__logo-ecomerce" src="/img/f31fdbfd12b83132bbf565f3d1cb1636.jpg" alt=""/></div>
      <form action="#" className="search-bar__form-container">
        <label htmlFor="busqueda" className="search-bar__form-label">
        </label>
        <input
          type="search"
          className="search-bar__form-search"
          id="busqueda"
        />
        <input
          type="submit"
          className="search-bar__form-submit"
          value="Buscar"
        />
      </form>
      <div className="search-bar__carrito-container label-header "><Link to="carrito"><i className="carro-bar fa-solid fa-cart-shopping"/></Link></div>
      <div className="menu-toogle">
        <label htmlFor="menu" className="menu-toogle__label">
          <span className="menu-toogle__top-bread"></span>
          <span className="menu-toogle__meat"></span>
          <span className="menu-toogle__bottom-bread"></span>
        </label>
      </div>
    </div>
  );
};

export default SearchBar;
