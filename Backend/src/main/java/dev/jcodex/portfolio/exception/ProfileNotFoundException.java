package dev.jcodex.portfolio.exception;

public class ProfileNotFoundException extends RuntimeException {
    public ProfileNotFoundException(String error) {
        super(error);
    }
}
