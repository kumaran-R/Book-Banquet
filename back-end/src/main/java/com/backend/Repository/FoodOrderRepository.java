package com.backend.Repository;

import com.backend.Model.FoodOrder;
import org.springframework.stereotype.Repository;
import org.springframework.data.mongodb.repository.MongoRepository;


@Repository
public interface FoodOrderRepository extends MongoRepository<FoodOrder,String>{

}
