package com.backend.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * Created by Kumaran on 10/18/2018.
 */

@Document(collection = "halls")
public class BanqueteHall {
    @Id
    String id;
    String name;

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
