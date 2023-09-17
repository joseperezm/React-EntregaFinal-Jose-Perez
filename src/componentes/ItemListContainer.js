import { useState, useEffect} from 'react'
import { getProducts, getProductsByCategory } from './asyncMock.js'
import ItemList from './ItemList.js'

import { useParams } from 'react-router-dom'

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])

  const { categoryId } = useParams()

  useEffect(() => {
    const asyncFunc = categoryId ? getProductsByCategory : getProducts

    asyncFunc(categoryId)
    .then(response => {
      setProducts(response)
    })
    .catch(error => {
      console.error(error)
    })
  }, [categoryId])

  const updatedGreeting = categoryId
    ? `${capitalizeFirstLetter(categoryId)}`
    : greeting;

  return (
    <div>
      <h1>{updatedGreeting}</h1>
      <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer