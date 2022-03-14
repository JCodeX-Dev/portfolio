package dev.jcodex.portfolio.service;

import dev.jcodex.portfolio.exception.ProfileNotFoundException;
import dev.jcodex.portfolio.model.Profile;
import dev.jcodex.portfolio.repo.ProfileRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class ProfileService {

    private final ProfileRepository profileRepository;

    public void createProfile(Profile profile) {
        profileRepository.insert(profile);
    }

    public Profile getProfile(String username) {
        return profileRepository.findProfileByUsername(username).orElseThrow(() -> new ProfileNotFoundException("Requested user profile not found"));

    }
}
