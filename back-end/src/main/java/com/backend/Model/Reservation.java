package com.backend.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

/**
 * Created by Kumaran on 10/31/2018.
 */
@Document(collection = "reservations")
public class Reservation {
    @Id
    String id;
    BanqueteHall banqueteHall;
    int personCount;
    int tableCount;
    int chairCount;
    boolean serviceRequest;
    boolean foodRequest;
    List<FoodOrder> foodOrders;
    Customer customer;
    String fromDate;
    String toDate;
    String totalCost;
    String downPayment;

    public Reservation(String id, BanqueteHall banqueteHall, int personCount, int tableCount, int chairCount, boolean serviceRequest, boolean foodRequest, List<FoodOrder> foodOrders, Customer customer, String fromDate, String toDate, String totalCost, String downPayment) {
        this.id = id;
        this.banqueteHall = banqueteHall;
        this.personCount = personCount;
        this.tableCount = tableCount;
        this.chairCount = chairCount;
        this.serviceRequest = serviceRequest;
        this.foodRequest = foodRequest;
        this.foodOrders = foodOrders;
        this.customer = customer;
        this.fromDate = fromDate;
        this.toDate = toDate;
        this.totalCost = totalCost;
        this.downPayment = downPayment;
    }

    public Reservation() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public BanqueteHall getBanqueteHall() {
        return banqueteHall;
    }

    public void setBanqueteHall(BanqueteHall banqueteHall) {
        this.banqueteHall = banqueteHall;
    }

    public int getPersonCount() {
        return personCount;
    }

    public void setPersonCount(int personCount) {
        this.personCount = personCount;
    }

    public int getTableCount() {
        return tableCount;
    }

    public void setTableCount(int tableCount) {
        this.tableCount = tableCount;
    }

    public int getChairCount() {
        return chairCount;
    }

    public void setChairCount(int chairCount) {
        this.chairCount = chairCount;
    }

    public boolean isServiceRequest() {
        return serviceRequest;
    }

    public void setServiceRequest(boolean serviceRequest) {
        this.serviceRequest = serviceRequest;
    }

    public boolean isFoodRequest() {
        return foodRequest;
    }

    public void setFoodRequest(boolean foodRequest) {
        this.foodRequest = foodRequest;
    }

    public List<FoodOrder> getFoodOrders() {
        return foodOrders;
    }

    public void setFoodOrders(List<FoodOrder> foodOrders) {
        this.foodOrders = foodOrders;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public String getFromDate() {
        return fromDate;
    }

    public void setFromDate(String fromDate) {
        this.fromDate = fromDate;
    }

    public String getToDate() {
        return toDate;
    }

    public void setToDate(String toDate) {
        this.toDate = toDate;
    }

    public String getTotalCost() {
        return totalCost;
    }

    public void setTotalCost(String totalCost) {
        this.totalCost = totalCost;
    }

    public String getDownPayment() {
        return downPayment;
    }

    public void setDownPayment(String downPayment) {
        this.downPayment = downPayment;
    }
}
