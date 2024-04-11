package com.ecommercebackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.ecommercebackend.entities.Product;
import com.ecommercebackend.service.ProductService;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/")
public class HomeController {
	
	@Autowired
	private ProductService productService;
	
	@GetMapping
	public ResponseEntity<List<Product>> handleAllProducts(){
		
		List<Product> allProducts = this.productService.getAllProducts();
		return new ResponseEntity<>(allProducts , HttpStatus.OK);
		
	}
	
	@PostMapping
	public ResponseEntity<Product> addNewProduct(@RequestBody Product product){
		Product newProduct = this.productService.addNewProduct(product);
		return new ResponseEntity<>(newProduct , HttpStatus.OK);
		
	}
	

}
