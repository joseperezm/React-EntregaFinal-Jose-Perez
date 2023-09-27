import { useContext, useState } from 'react';
import ItemCount from './ItemCount.js';
import Card from 'react-bootstrap/Card';
import { useSnackbar } from 'notistack';
import { Link } from 'react-router-dom';

import { CartContext } from '../context/CartContext'

const ItemDetail = ({ id, name, image, category, description, price, stock }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [quantityAdded, setQuantityAdded] = useState(0);

  const { addItem } = useContext(CartContext)

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity)

    const item = {
      id, name, price
    }

    addItem(item, quantity)

    enqueueSnackbar(`Agregado al carrito: ${quantity} ${name}`, { variant: 'success' });
    console.log('Cantidad agregada', quantity);
  };
  return (
        <Card style={{ width: '18rem' }} className='m-3 pb-3'>
        <Card.Img variant="top" src={image} alt={name} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Categoría: {category}
            <br />
            Descripción: {description}
            <br />
            Precio: ${price}
            <br />
            Stock: {stock}
          </Card.Text> 
        </Card.Body>
        {
          quantityAdded > 0 ? (
            <Link to='/cart' className='Option btn btn-primary mt-2 terminar_compra'>Terminar Compra</Link>
          ) : (
            <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
          )
        }
      </Card>
  );
};

export default ItemDetail;