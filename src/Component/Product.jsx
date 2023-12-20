import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from "react";
import CardFooter from 'react-bootstrap/esm/CardFooter';

const Product = () => {

    const [Products, getProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(data => data.json())
            .then(result => getProducts(result))

    }, []);
    const cards=Products.map(product =>(
        <div className='col-md-3 mb-5'>
              <Card key={product.id} className='h-100'>
                <div className='text-center'>
                <Card.Img variant="top" src={product.image} style={{height:"130px", width:"100px"}} />
                </div>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                       INR:{product.price}
                    </Card.Text>
                </Card.Body>
                <CardFooter className='bg-white'>
                <Button variant="primary">Add to Card</Button>
                </CardFooter>
            </Card>
        </div>

    ))
    return (
        <>
            <h1>Product Details</h1>
            <div className='row'>
                {cards}

            </div>
           
          
        </>

    )
};
export default Product;
