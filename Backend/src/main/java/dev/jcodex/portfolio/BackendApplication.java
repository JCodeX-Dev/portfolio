package dev.jcodex.portfolio;

import dev.jcodex.portfolio.model.About;
import dev.jcodex.portfolio.model.Profile;
import dev.jcodex.portfolio.model.Project;
import dev.jcodex.portfolio.model.Social;
import dev.jcodex.portfolio.repo.ProfileRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.util.Arrays;
import java.util.List;

@SpringBootApplication
public class BackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }
}
