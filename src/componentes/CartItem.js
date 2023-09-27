import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartItem = ({ id, name, img, price, quantity }) => {
  const { removeItem, increaseItemQuantity, decreaseItemQuantity } = useContext(CartContext);

  return (
    <article className="fondo-blanco mb-5">

        <h2>{name}</h2>
        <h2>${price}</h2>

        <div>
              <p>Unidades</p>
              <div className="d-flex justify-content-between unidades-carro">
                <div onClick={() => decreaseItemQuantity(id)}> -</div>
                <p >{quantity}</p>
                <div onClick={() => increaseItemQuantity(id)}> +</div>
              </div>
        </div>
        <div className="text-end">
        <button onClick={() => removeItem(id)} className="btn btn-danger">
        <i className="bi bi-trash"></i> 
        </button>
        </div>
    </article>

  );
};

export default CartItem;