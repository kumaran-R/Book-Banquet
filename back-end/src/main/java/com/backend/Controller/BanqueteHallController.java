package com.backend.Controller;

import com.backend.Model.BanqueteHall;
import com.backend.Repository.BanqueteHallRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by Kumaran on 10/18/2018.
 */

@RestController
@RequestMapping("/halls")
public class BanqueteHallController {

    private BanqueteHallRepository banqueteHallRepository;

    public BanqueteHallController(BanqueteHallRepository banqueteHallRepository) {
        this.banqueteHallRepository = banqueteHallRepository;
    }

    @GetMapping("/all")
    public List<BanqueteHall> getAll(){
        return this.banqueteHallRepository.findAll();
    }

    @PutMapping
    public void insert(@RequestBody BanqueteHall b){
        this.banqueteHallRepository.insert(b);
    }

    @PostMapping
    public void update(@RequestBody BanqueteHall b){
        this.banqueteHallRepository.save(b);
    }

    @DeleteMapping("/{id}")
    public void update(@PathVariable String id){
        this.banqueteHallRepository.deleteById(id);
    }

}
