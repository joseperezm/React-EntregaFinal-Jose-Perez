import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from './CartItem'
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, clearCart, totalQuantity, increaseItemQuantity, decreaseItemQuantity } = useContext(CartContext);
    const total = parseFloat(cart.reduce((acc, product) => acc + product.price * product.quantity, 0));

    if (totalQuantity === 0) {
        return (
            <div>
                <div className="mx-auto">
                    <h1>No hay items en el carro</h1>
                    <Link to="/" className="btn btn-primary mt-3">Volver</Link>
                </div>
            </div>
        );
    }

    return (
        <div>
            <h2>Carrito de Compras</h2>
            <div className="text-end m-5">
                <Link to="/" className={`btn btn-primary`}>Seguir Comprando</Link>
            </div>
            <div>
                <div>
                    {cart.map(p => (
                        <CartItem
                            key={p.id}
                            {...p}
                            increaseItemQuantity={increaseItemQuantity}
                            decreaseItemQuantity={decreaseItemQuantity}
                        />
                    ))}
                </div>
                <div>
                    <div className="fondo-blanco">
                        <h4 className="mb-5">Resumen del Carro</h4>
                        <div className="d-flex justify-content-between mb-3 resumen-carro">
                            <p>Total:</p>
                            <h4>$ {total} clp</h4>
                        </div>
                        <div className="d-flex justify-content-between mb-5 resumen-carro">
                            <p>Cantidad de Productos:</p>
                            <p>{totalQuantity} item/s</p>
                        </div>
                        <div className="d-flex justify-content-between mb-3 resumen-carro">
                        <button onClick={() => clearCart()} className="btn btn-danger">
                            <i className="bi bi-trash"></i> Limpiar carro
                        </button>
                        <div>
                            <Link to='/checkout' className={`btn btn-primary`}>
                            <i className="bi bi-bag-check"></i> Terminar Compra</Link>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;