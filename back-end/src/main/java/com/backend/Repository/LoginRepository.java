package com.backend.Repository;

import com.backend.Model.Login;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface LoginRepository extends MongoRepository<Login, String>  {
    public Login findByUsername(String username);
}
