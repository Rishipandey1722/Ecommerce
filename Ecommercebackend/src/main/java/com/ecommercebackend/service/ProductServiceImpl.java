package com.ecommercebackend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommercebackend.entities.Product;
import com.ecommercebackend.repositiory.ProductRepository;

@Service
public class ProductServiceImpl implements ProductService{

	@Autowired
	private ProductRepository productRepository;
	@Override
	public List<Product> getAllProducts() {
		
		List<Product> allProducts = this.productRepository.findAll();
		
		return allProducts;
	}
	@Override
	public Product addNewProduct(Product product) {
		
		Product savedProduct = this.productRepository.save(product);
		
		return savedProduct;
	}

}
