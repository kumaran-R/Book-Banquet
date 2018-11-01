package com.backend.Controller;

import com.backend.Model.BanqueteHall;
import com.backend.Model.Food;
import com.backend.Repository.FoodRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/food")
public class FoodController {
    private FoodRepository foodRepository;

    public FoodController(FoodRepository foodRepository){
        this.foodRepository = foodRepository;
    }

    @GetMapping("/all")
    public List<Food> getAll(){ return this.foodRepository.findAll(); }

    @PutMapping
    public void insert(@RequestBody Food b){
        this.foodRepository.insert(b);
    }

    @PostMapping
    public void update(@RequestBody Food b){
        this.foodRepository.save(b);
    }

    @DeleteMapping("/{id}")
    public void update(@PathVariable String id){
        this.foodRepository.deleteById(id);
    }
}
