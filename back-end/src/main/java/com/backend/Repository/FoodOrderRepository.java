package com.backend.Repository;

import com.backend.Model.FoodOrder;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface FoodOrderRepository extends MongoRepository<FoodOrder,String>{

}
