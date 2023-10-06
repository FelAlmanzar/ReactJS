import React, { useState } from "react";
import { useCart } from "../../context/cartContext";

const Checkout = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
  });

  const { cantidadEnCarrito } = useCart();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes acceder a los valores ingresados por el usuario en formData
    const { nombre, email, telefono } = formData;

    // Realiza alguna acción, como enviar los datos a un servidor, procesar el pedido, etc.
  };

  return (
    <div>
      <h1>Checkout</h1>
      <form className="formulario" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleInputChange}
        />
        <input
          type="email"
          placeholder="Correo"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Teléfono"
          name="telefono"
          value={formData.telefono}
          onChange={handleInputChange}
        />

        <button className="compra" type="submit">
          Comprar
        </button>
      </form>
    </div>
  );
};

export default Checkout;