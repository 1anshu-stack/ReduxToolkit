import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../redux/cartSlice';
import { getProducts } from '../redux/productSlice';

const Product = () => {
    const dispatch = useDispatch();
    const { data:products, status } = useSelector(state => state.products);

    useEffect(() => {
        dispatch(getProducts());
        // api
        // fetch('https://fakestoreapi.com/products')
        //     .then(data => data.json())
        //     .then(result => getProducts(result))
    }, []);

    if(status === 'Loading'){
        return <p>Loading......</p>
    }

    if(status === 'erroe'){
        return <Alert key="danger" variant="danger">
            Something went wrong.....
        </Alert>
    }

    const addToCart = (product) => {
        dispatch(add(product))
    }

    const cards = products.map(product => (
        <div className='col-md-3' style={{marginBottom: '10px'}}>
            <Card key={product.id} className="h-100" style={{ width: '18rem' }}>
                <div className="text-center">
                    <Card.Img variant="top" src={product.image} style={{width: '100px', height: '130px'}} />
                </div>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        INR: {product.price}
                    </Card.Text>
                </Card.Body>
                <Card.Footer style={{ background: 'white' }}>
                    <Button variant="primary" onClick={()=>addToCart(product)}>Add To Cart</Button>
                </Card.Footer>
            </Card>
        </div>
    ))

    return <>
        <h1>Product</h1>
        <div className='row'>
            {cards}
        </div>
    </>
};

export default Product;