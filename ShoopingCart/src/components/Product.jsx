import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

const Product = () => {

    const [products, getProducts] = useState([]);
    useEffect(() => {
        //api
        fetch('https://fakestoreapi.com/products')
            .then(data => data.json())
            .then(result => getProducts(result))

    }, []);

    const cards = products.map(product =>
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
                    <Button variant="primary">Add To Cart</Button>
                </Card.Footer>
            </Card>
        </div>
    )

    return <>
        <h1>Product</h1>
        <div className='row'>
            {cards}
        </div>
    </>
};

export default Product;