import React, { useEffect, useState } from 'react'

export default function Products() {
    let [products, setProducts] = useState([]);

    const getProducts = async () => {
        let response = await fetch("https://fakestoreapi.com/products?authuser=0");
        let data = await response.json();
        setProducts(data);
    }
    useEffect(() => { getProducts(); }, []);
    return (
        <div className='row'>
            {products.map((product) => {
                return <div className='col-md-3' key={product.id}>
                    <h2>{product.title}</h2>
                    <img src={product.image} alt="" className='img-fluid' />
                </div>
            })}
        </div>

    )
}
