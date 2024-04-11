import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../../services/ProductServices";
import { Container, Grid, TextField, Button, Typography } from '@mui/material';

const AddProduct = () => {
  const [name, setProductName] = useState("");
  const [description, setProductDesc] = useState("");
  const [price, setProductPrice] = useState("");
  const [category, setProductCategory] = useState("");
  const navigate = useNavigate();

  const handleProductName = (e) => setProductName(e.target.value);
  const handleProductPrice = (e) => setProductPrice(e.target.value);
  const handleProductCategory = (e) => setProductCategory(e.target.value);
  const handleProductDesc = (e) => setProductDesc(e.target.value);

  const AddNewProduct = (e) => {
    e.preventDefault();
    const product = { name, price, description, category };
    createProduct(product)
      .then((response) => {
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
    console.log(product);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12}>
          <Typography variant="h4" align="center" gutterBottom>
            Add New Product
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <form onSubmit={AddNewProduct}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Product Name"
                  variant="outlined"
                  value={name}
                  onChange={handleProductName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Product Price"
                  variant="outlined"
                  value={price}
                  onChange={handleProductPrice}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Product Description"
                  variant="outlined"
                  value={description}
                  onChange={handleProductDesc}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Product Category"
                  variant="outlined"
                  value={category}
                  onChange={handleProductCategory}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  Add Product
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AddProduct;
