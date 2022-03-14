package dev.jcodex.portfolio.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Project {

    private String title;
    private String description;
    private String link;

}
