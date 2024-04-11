import React from 'react';
import { Card } from 'react-bootstrap';

const Cart = () => {
    const cart = []

  return (
    
    <div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((product) => (
            <Card key={product.id} style={{ marginBottom: '10px' }}>
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>Price: ${product.price}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
