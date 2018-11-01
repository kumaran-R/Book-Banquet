package com.backend.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * Created by Kumaran on 10/31/2018.
 */
@Document(collection = "foodOrder")
public class FoodOrder {
    @Id
    String id;
    int count;
    Food food;

    public FoodOrder(String id, int count, Food food) {
        this.id = id;
        this.count = count;
        this.food = food;
    }

    public FoodOrder() {
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setCount(int count) {
        this.count = count;
    }

    public void setFood(Food food) {
        this.food = food;
    }
}
