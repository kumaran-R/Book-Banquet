package com.backend.Controller;

import com.backend.Model.Customer;
import com.backend.Repository.CustomerRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by Jonathan on 11/1/2018.
 */
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/customers")
public class CustomerController {

    private CustomerRepository customerRepositoryRepository;

    public CustomerController(CustomerRepository customerRepository) {
        this.customerRepositoryRepository = customerRepository;
    }

    @GetMapping("/all")
    public List<Customer> getAll(){
        return this.customerRepositoryRepository.findAll();
    }

    @GetMapping("/{id}")
    public Customer getOne(@PathVariable String id){
        return this.customerRepositoryRepository.findById(id).orElse(new Customer());
    }

    @PutMapping
    public void insert(@RequestBody Customer b){
        this.customerRepositoryRepository.insert(b);
    }

    @PostMapping
    public void update(@RequestBody Customer b){
        this.customerRepositoryRepository.save(b);
    }

    @DeleteMapping("/{id}")
    public void update(@PathVariable String id){
        this.customerRepositoryRepository.deleteById(id);
    }

}
