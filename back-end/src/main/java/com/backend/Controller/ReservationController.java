package com.backend.Controller;

import com.backend.Model.Reservation;
import com.backend.Repository.ReservationRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by Kumaran on 10/18/2018.
 */
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/reservation")
public class ReservationController {

    private ReservationRepository reservationRepository;

    public ReservationController(ReservationRepository reservationRepository) {
        this.reservationRepository = reservationRepository;
    }

    @GetMapping("/all")
    public List<Reservation> getAll(){
        return this.reservationRepository.findAll();
    }

    @GetMapping("/{id}")
    public Reservation getOne(@PathVariable String id){
        return this.reservationRepository.findById(id).orElse(new Reservation());
    }

    @PutMapping
    public void insert(@RequestBody Reservation b){
        this.reservationRepository.insert(b);
    }

    @PostMapping
    public void update(@RequestBody Reservation b){
        this.reservationRepository.save(b);
    }

    @DeleteMapping("/{id}")
    public void update(@PathVariable String id){
        this.reservationRepository.deleteById(id);
    }

}
