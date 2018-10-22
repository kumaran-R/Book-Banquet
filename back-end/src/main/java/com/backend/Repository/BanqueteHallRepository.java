package com.backend.Repository;

import com.backend.Model.BanqueteHall;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by Kumaran on 10/18/2018.
 */
@Repository
public interface BanqueteHallRepository extends MongoRepository<BanqueteHall,String> {

}
