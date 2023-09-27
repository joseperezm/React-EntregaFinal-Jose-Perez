import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { db } from '../services/firebase/firebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();
    const [, setGreeting] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productsCollection = collection(db, 'products');
                let firestoreQuery;
                if (categoryId) {
                    firestoreQuery = query(productsCollection, where('category', '==', categoryId));
                    setGreeting(`${categoryId}`);
                } else {
                    firestoreQuery = productsCollection;
                    setGreeting('Bienvenidos');
                }

                const querySnapshot = await getDocs(firestoreQuery);

                const productData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                setProducts(productData);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        };

        fetchProducts();
    }, [categoryId]);

    const SkeletonProduct = () => (
        <div className="d-flex justify-content-center align-items-center">
            <div
                style={{ width: "250px", height: "auto", marginRight: "50px" }}
            >
            </div>
        </div>
    );

    const groupProductsByCategory = () => {
        const groupedProducts = {};

        products.forEach((product) => {
            const { category } = product;
            if (!groupedProducts[category]) {
                groupedProducts[category] = [];
            }
            groupedProducts[category].push(product);
        });

        return groupedProducts;
    };

    const groupedProducts = groupProductsByCategory();

    const renderTitle = () => {
        if (!categoryId)
            return null;
    };

    return (
        <div>
            {renderTitle()}
            {loading ? (
                <div className="d-flex flex-wrap justify-content-center align-items-center">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <SkeletonProduct key={index} />
                    ))}
                </div>
            ) : (
                <div className="item-list-container">
                    {Object.keys(groupedProducts).map((category) => (
                        <div key={category}>
                            <h2 className='text-center mt-3' style={{
                                textTransform: 'uppercase',
                            }}>{category}</h2>
                            <ItemList products={groupedProducts[category]} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ItemListContainer;