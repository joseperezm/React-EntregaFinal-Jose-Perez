import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({id, name, image, price, stock}) => {
  return (
    <Card style={{ width: '18rem' }} className='m-3'>
      <Card.Img variant="top" src={image} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Precio: ${price}
          <br />
          Stock: {stock}
        </Card.Text>
        <Link to={`/item/${id}`} className='Option btn btn-primary'>Ver detalle</Link>
      </Card.Body>
    </Card>
  );
};

export default Item;