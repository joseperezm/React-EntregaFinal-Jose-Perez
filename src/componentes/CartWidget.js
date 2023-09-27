import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);

    return (
        <Link to='/cart' style={{display: totalQuantity > 0 ? 'block' : 'none'}}>
        <div id="cartwidget" className="cartwidget d-flex">
            <img src="/Cart.png" alt="" className="cart"/>
            <p className="itemcart">{totalQuantity}</p>
        </div>
        </Link>
    )
}

export default CartWidget