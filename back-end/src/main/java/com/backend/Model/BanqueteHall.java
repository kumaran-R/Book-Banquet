package com.backend.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * Created by Kumaran on 10/18/2018.
 * james
 */
//Brian is cool
@Document(collection = "halls")
public class BanqueteHall { //jon is working here
    @Id
    String id;
    String name;
    String HallType;
    double costPerHour;
    String size;
    int maxTables;
    int maxChairs;
    int capacity;

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public String getHallType() {
        return HallType;
    }

    public void setHallType(String hallType) {
        HallType = hallType;
    }

    public double getCostPerHour() {
        return costPerHour;
    }

    public void setCostPerHour(double costPerHour) {
        this.costPerHour = costPerHour;
    }

    public int getMaxTables() {
        return maxTables;
    }

    public void setMaxTables(int maxTables) {
        this.maxTables = maxTables;
    }

    public int getMaxChairs() {
        return maxChairs;
    }

    public void setMaxChairs(int maxChairs) {
        this.maxChairs = maxChairs;
    }

    public int getCapacity() {
        return capacity;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }


    public BanqueteHall(String name) {
        this.name = name;
    }

    public BanqueteHall() {           }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "BanqueteHall{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                '}';
    }
}
