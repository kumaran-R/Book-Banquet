package com.backend.Repository;

import com.backend.Model.Food;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface FoodRepository extends MongoRepository<Food, String>  {
}
