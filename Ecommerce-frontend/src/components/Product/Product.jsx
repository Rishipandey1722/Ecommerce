import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { listProducts } from '../../services/ProductServices';

const ProductList = () => {

    const [products , setProduct] = useState([]);
    const getAllProducts = ()=>{
        listProducts().then((response) =>{
            setProduct(response.data);
        })
        .catch((error) =>{
            console.error(error)
        });
    };

    useEffect(()=>{
        getAllProducts();
    });
  

  return (
    <div className="container">
      <h2 className="mt-4 mb-4">Products</h2>
      <div className="row">
        {/* Map over the array of products and render each product card */}
        {products.map(product => (
          <div key={product.id} className="col-lg-4 col-md-6 mb-4">
            <Card>
              {/* Product image can be added here */}
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>Price: ${product.price}</Card.Text>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
