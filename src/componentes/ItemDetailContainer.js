import { useState, useEffect } from "react";
import { getProductById } from './asyncMock.js';
import ItemDetail from './ItemDetail.js';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const [product  , setProduct] = useState(null)

  const { itemId } = useParams()

  useEffect(() => {
    getProductById(itemId)
    .then(response => {
      setProduct(response)
    })
    .catch(error => {
      console.error(error)
    })
  }, [itemId])

  return(
    <div className='ItemDetailContainer d-flex justify-content-center'> 
      <ItemDetail {...product} />
    </div>
  )
}

export default ItemDetailContainer