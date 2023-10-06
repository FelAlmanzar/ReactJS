import { useForm } from "react-hook-form";
import { useCart } from "../../context/cartContext";
import { collection, addDoc, doc } from "firebase/firestore";
import { db } from "../firebase/data";
import { useState } from "react";
import "./style.css"

const Checkout = () => {
    const [pedidoId, setPedidoId] = useState("");
  const { cart, precioTotal, clear } = useCart();
  const { register, handleSubmit } = useForm();

  const comprar = (data) => {
    const pedido = {
      cliente: data,
      productos: cart,
      total: precioTotal(),
    };
    console.log(pedido);

    const pedidosRef = collection(db, "pedidos")

    addDoc(pedidosRef, pedido)
    .then((doc) =>{
    setPedidoId(doc.id)
    clear();
})
  }

  if (pedidoId) {
    return (
        <div className="textCompra">
            <img src="/images/fresh-prince-of-bel-air-celebration-dance-iaxqw2oi7vqgcg5j.gif" alt="" />
            <h1>Gracias por tu compra</h1>
            <p>Tu número de pedido es: <br/><strong>{pedidoId}</strong></p>
            </div>
    )
  }

  return (
    <div className="formContainer">
      <h1>Checkout</h1>
      <form className="formulario" onSubmit={handleSubmit(comprar)}>
        <input type="text" placeholder="Nombre" {...register("nombre")} />
        <input type="email" placeholder="Correo" {...register("email")} />
        <input type="tel" placeholder="Teléfono" {...register("phone")} />
        

        <button className="compra" type="submit">
          Comprar
        </button>
      </form>
    </div>
  );
};

export default Checkout;



