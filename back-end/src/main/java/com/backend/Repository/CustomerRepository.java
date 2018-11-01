package com.backend.Repository;

import com.backend.Model.Customer;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by Jonathan on 11/1/2018.
 */
@Repository
public interface CustomerRepository extends MongoRepository<Customer,String> {

}
