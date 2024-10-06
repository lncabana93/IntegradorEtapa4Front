import { useContext, useEffect, useState } from "react";
import ProductosContext from "../context/ProductosContext";
import "./Formulario.scss";
const Formulario = () => {
  const formInit = {
    id: null,
    nombre: "",
    precio: "",
    stock: "",
    marca: "",
    categoria: "",
    detalles: "",
    foto: "",
    envio: false,
  };

  const [form, setForm] = useState(formInit);

  const {
    crearProductoContext,
    actualizarProductoContext,
    productoAEditar,
    setProductoAEditar,
  } = useContext(ProductosContext);

  useEffect(() => {
    productoAEditar ? setForm(productoAEditar) : setForm(formInit);
  }, [productoAEditar]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (form.id === null) {
        await crearProductoContext(form);
      } else {
        console.log("Actualizando producto");
        await actualizarProductoContext(form);
      }
      handleReset();
    } catch (error) {
      console.error("[handleSubmit]", error);
    }
  };

  const handleChange = (e) => {
    const { type, name, checked, value } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleReset = () => {
    setForm(formInit);
    setProductoAEditar(null);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="altaProducto">
          <label className="altaLabel" htmlFor="lbl-nombre">
            Nombre:{" "}
          </label>
          <input
            className="inputAlta"
            type="text"
            name="nombre"
            id="lbl-nombre"
            value={form.nombre}
            onChange={handleChange}
          />
        </div>
        <div className="altaProducto">
          <label className="altaLabel" htmlFor="lbl-precio">
            Precio:{" "}
          </label>
          <input
            className="inputAlta"
            type="text"
            name="precio"
            id="lbl-precio"
            value={form.precio}
            onChange={handleChange}
          />
        </div>
        <div className="altaProducto">
          <label className="altaLabel" htmlFor="lbl-stock">
            Stock:{" "}
          </label>
          <input
            className="inputAlta"
            type="text"
            name="stock"
            id="lbl-stock"
            value={form.stock}
            onChange={handleChange}
          />
        </div>
        <div className="altaProducto">
          <label className="altaLabel" htmlFor="lbl-marca">
            Marca:{" "}
          </label>
          <input
            className="inputAlta"
            type="text"
            name="marca"
            id="lbl-marca"
            value={form.marca}
            onChange={handleChange}
          />
        </div>
        <div className="altaProducto">
          <label className="altaLabel" htmlFor="lbl-categoria">
            Categoría:{" "}
          </label>
          <input
            className="inputAlta"
            type="text"
            name="categoria"
            id="lbl-categoria"
            value={form.categoria}
            onChange={handleChange}
          />
        </div>
        <div className="altaProducto">
          <label className="altaLabel" htmlFor="lbl-detalles">
            Detalles:{" "}
          </label>
          <input
            className="inputAlta"
            type="text"
            name="detalles"
            id="lbl-detalles"
            value={form.detalles}
            onChange={handleChange}
          />
        </div>
        <div className="altaProducto">
          <label className="altaLabel" htmlFor="lbl-foto">
            Foto:{" "}
          </label>
          <input
            className="inputAlta"
            type="text"
            name="foto"
            id="lbl-foto"
            value={form.foto}
            onChange={handleChange}
          />
        </div>
        <div className="altaProducto">
          <label className="altaLabel" htmlFor="lbl-envio">
            Envío:
          </label>
          <input
            className="inputAlta"
            type="checkbox"
            name="envio"
            id="lbl-envio"
            checked={form.envio}
            onChange={handleChange}
          />
        </div>

        <button className="botonGreen" type="submit">
          Guardar
        </button>
        <button className="orange" type="reset" onClick={handleReset}>
          Limpiar
        </button>
      </form>
    </>
  );
};

export default Formulario;
