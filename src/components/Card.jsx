import { useContext } from 'react';
import './Card.scss'
import CarritoContext from '../context/CarritoContext';

const Card = ( { producto } ) => {

  const { agregarProductoAlCarritoContext } = useContext(CarritoContext)

  const handleAgregar = (producto) => {
    console.log('Agregando el producto al carrito...')
    agregarProductoAlCarritoContext(producto)
  }

  return (
    <div className="card">
      <article className="card__article">
        <div className="card__image-container">
          <img
            src={producto.foto}
            alt={producto.nombre}
            className="card__image"
          />
        </div>
        <div className="card__content">
          <h2 className="card__heading">{producto.nombre}</h2>
          <div className="card__description">
             <div className="precio">{" $" + producto.precio}</div> 
             <div className="detalles">
             <div>{"Stock disponible: " + producto.stock}</div>
             <div> {"Marca: " + producto.marca}</div>
             <div>{"Categoria: " + producto.categoria}</div>
             <div>{"Detalles: " + producto.detalles}</div>
             <div>{"Categoria: " + producto.categoria}</div>
             </div>
             <div className="rating_star">
                  <input className="input-star" type="radio" name="rating"  />
                  <label className="label-star" htmlFor="star-1"><i className="fa-solid fa-star"></i></label>
                  <input className="input-star" type="radio" name="rating"  />
                  <label className="label-star"  htmlFor="star-2"><i className="fa-solid fa-star"></i></label>
                  <input className="input-star" type="radio" name="rating"  />
                  <label className="label-star"  htmlFor="star-3"><i className="fa-solid fa-star"></i></label>
                  <input className="input-star" type="radio" name="rating"  />
                  <label className="label-star"  htmlFor="star-4"><i className="fa-solid fa-star"></i></label>
                  <input className="input-star" type="radio" name="rating"  />
                  <label className="label-star"  htmlFor="star-5"><i className="fa-solid fa-star"></i></label>
                  </div>
            <button onClick={() => handleAgregar(producto)}className="carrito_compra" ><i className="fa-solid fa-cart-shopping"></i></button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Card;
