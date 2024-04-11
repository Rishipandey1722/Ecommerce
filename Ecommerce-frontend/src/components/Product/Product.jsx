import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { listProducts } from "../../services/ProductServices";
import Cart from "../Cart/Cart";

const Product= () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const getAllProducts = () => {
    listProducts()
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const handleAddToCart = (product) => {
    // Simply add the product to the cart
    setCart([...cart, product]);
    // console.log(cart);
  };

  return (

    


    <div className="container" >
      <br />
      <br />
      
      <h1 className="mt-4 mb-4">Products</h1>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-lg-4 col-md-6 mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>Price: ${product.price}</Card.Text>
                <Button variant="primary" onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      {/* <Cart cart={cart} />
       */}
       <Cart cart={cart} />

    </div>
  );
};

export default Product;
