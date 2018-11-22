package com.backend.Controller;

import com.backend.Model.Login;
import com.backend.Repository.LoginRepository;
import org.springframework.web.bind.annotation.*;

import java.io.Console;
import java.util.List;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/login")
public class LoginController {
    private LoginRepository loginRepository;

    public LoginController(LoginRepository loginRepository){
        this.loginRepository = loginRepository;
    }

    @PostMapping
    public boolean checkLogin(@RequestBody Login b)
    {
        Login checkLogin = loginRepository.findByUsername(b.getUsername());

        if (b.getUsername().equals("admin") && b.getPassword().equals("123"))
        {
            return true;
        }

        return false;
    }
}
