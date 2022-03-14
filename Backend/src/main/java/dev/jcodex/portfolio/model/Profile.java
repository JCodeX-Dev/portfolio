package dev.jcodex.portfolio.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@Document
public class Profile {

    @Id
    @JsonIgnore
    private String id;
    @Indexed(unique = true)
    private String username;

    private String profileImage;
    private String firstName;
    private String middleName;
    private String lastName;
    private String role;
    private String quote;

    private Social socialLinks;

    private About about;
    private List<Project> projects;

    public Profile(String username,
                   String profileImage,
                   String firstName,
                   String middleName,
                   String lastName,
                   String role,
                   String quote,
                   Social socialLinks,
                   About about,
                   List<Project> projects) {
        this.username = username;
        this.profileImage = profileImage;
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.role = role;
        this.quote = quote;
        this.socialLinks = socialLinks;
        this.about = about;
        this.projects = projects;
    }
}
