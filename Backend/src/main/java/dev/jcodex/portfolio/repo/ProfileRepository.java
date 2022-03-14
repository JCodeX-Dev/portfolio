package dev.jcodex.portfolio.repo;

import dev.jcodex.portfolio.model.Profile;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ProfileRepository extends MongoRepository<Profile,String> {
    Optional<Profile> findProfileByUsername(String username);
}

