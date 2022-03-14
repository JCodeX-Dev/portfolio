package dev.jcodex.portfolio.model;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class About {

    private String intro;
    private List<String> skills;
    private String aboutImage;
    private String cv;
}
