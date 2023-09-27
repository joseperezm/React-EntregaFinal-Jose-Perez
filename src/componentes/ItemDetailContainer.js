import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { db } from '../services/firebase/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const { itemId } = useParams();

    useEffect(() => {
        const fetchProduct = async () => {
            try {                
                const productRef = doc(db, 'products', itemId);                
                const productDoc = await getDoc(productRef);

                if (productDoc.exists()) {
                    setProduct({ id: productDoc.id, ...productDoc.data() });
                } else {
                    console.log("No existe ese producto...");
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchProduct();
    }, [itemId]);

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
            {product ? <ItemDetail {...product} /> : <p>Cargando...</p>}
        </div>
    );
};

export default ItemDetailContainer;