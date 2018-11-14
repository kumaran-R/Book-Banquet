package com.backend.Controller;

import com.backend.Model.FoodOrder;
import com.backend.Repository.FoodOrderRepository;
import org.springframework.web.bind.annotation.*;
import java.util.List;



@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/foodorder")
public class FoodOrderController {

    private FoodOrderRepository foodOrderRepository;

    public FoodOrderController(FoodOrderRepository foodOrderRepository){
        this.foodOrderRepository = foodOrderRepository;
    }


    @GetMapping("/all")
    public List<FoodOrder> getAll(){ return this.foodOrderRepository.findAll();}

    @PostMapping
    public void update(@RequestBody FoodOrder b){
        this.foodOrderRepository.save(b);
    }

    @DeleteMapping("/{id}")
    public void update(@PathVariable String id){
        this.foodOrderRepository.deleteById(id);
    }




}
