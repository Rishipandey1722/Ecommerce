package com.ecommercebackend.service;

import java.util.List;

import com.ecommercebackend.entities.Product;

public interface ProductService {
	List<Product> getAllProducts();
	Product addNewProduct(Product product);

}
