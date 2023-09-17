import ItemCount from './ItemCount.js';
import Card from 'react-bootstrap/Card';
import { useSnackbar } from 'notistack';

const ItemDetail = ({ id, name, image, category, description, price, stock }) => {
  const { enqueueSnackbar } = useSnackbar();
  const handleAddToCart = (quantity) => {
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
        <ItemCount initial={1} stock={stock} onAdd={handleAddToCart} />
      </Card>
  );
};

export default ItemDetail;