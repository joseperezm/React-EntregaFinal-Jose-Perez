import React, { useState } from 'react';

const ItemCount = ({ initial, stock, onAdd }) => {
  const [cantidad, setCantidad] = useState(initial);

  const aumentarCantidad = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  const disminuirCantidad = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const confirmarCompra = () => {
    onAdd(cantidad);
  };

  return (
    <div>
      <div className='mt-2'>
        <button className='btn btn-secondary' onClick={disminuirCantidad}>-</button>
        <span className='mx-3'>{cantidad}</span>
        <button className='btn btn-secondary' onClick={aumentarCantidad}>+</button>
      </div>
      <button className='btn btn-primary mt-2' onClick={confirmarCompra} disabled={stock === 0}>
        Agregar
      </button>
    </div>
  );
};

export default ItemCount;