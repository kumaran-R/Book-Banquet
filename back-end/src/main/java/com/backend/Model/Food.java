package com.backend.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * Created by Kumaran on 10/31/2018.
 */
@Document(collection = "food")
public class Food {
    @Id
    String id;
    String foodName;
    String foodType;
    String tasteType;

    public Food() {
    }

    public Food(String id, String foodName, String foodType, String tasteType) {
        this.id = id;
        this.foodName = foodName;
        this.foodType = foodType;
        this.tasteType = tasteType;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getFoodName() {
        return foodName;
    }

    public void setFoodName(String foodName) {
        this.foodName = foodName;
    }

    public String getFoodType() {
        return foodType;
    }

    public void setFoodType(String foodType) {
        this.foodType = foodType;
    }

    public String getTasteType() {
        return tasteType;
    }

    public void setTasteType(String tasteType) {
        this.tasteType = tasteType;
    }
}
