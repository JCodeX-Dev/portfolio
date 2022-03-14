package dev.jcodex.portfolio.model;

import lombok.*;

@Data
@AllArgsConstructor
public class Mail {
    private String replyTo;
    private String name;
    private String subject;
    private String message;
}
