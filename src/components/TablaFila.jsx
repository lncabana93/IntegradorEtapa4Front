import { useContext } from 'react'
import './TablaFila.scss'
import ProductosContext from '../context/ProductosContext'

const TablaFila = ( { producto }) => {

  const { setProductoAEditar, eliminarProductoContext } = useContext(ProductosContext)
  
  //console.log(producto)
  const handleEditar = (producto) => {
    console.log('Producto a editar...', producto.id)
    setProductoAEditar(producto)
  };
  const handleBorrar = (idProducto) => {
    eliminarProductoContext(idProducto);
  };
  
  return (
    <tr>
      <td>{producto.nombre}</td>
      <td>{producto.precio}</td>
      <td>{producto.stock}</td>
      <td>{producto.marca}</td>
      <td>{producto.categoria}</td>
      <td>{producto.detalles}</td>
      <td>
        <img className="img-row" src={producto.foto} alt={producto.nombre} />
      </td>
      <td>{producto.envio ? 'SI' : 'NO'}</td>
      <td>
      <button className='orange' onClick={() => handleEditar(producto)}>Editar</button>
      <button className='botonRed' onClick={() => handleBorrar(producto.id)}>Borrar</button>
      </td>
    </tr>
  )
}

export default TablaFila