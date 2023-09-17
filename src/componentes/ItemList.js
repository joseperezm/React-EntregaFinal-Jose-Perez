import Item from './Item.js';
import { Container, Row, Col } from 'react-bootstrap';

const ItemList = ({ products }) => {
  return (
    <Container className='mt-4 d-flex justify-content-center'>
      <Row>
        {products.map(prod => (
          <Col key={prod.id} md={6} className='d-flex justify-content-center'>
            <Item {...prod} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ItemList;
