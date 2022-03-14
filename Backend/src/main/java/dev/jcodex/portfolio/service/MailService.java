package dev.jcodex.portfolio.service;

import com.fasterxml.jackson.annotation.JsonIgnore;
import dev.jcodex.portfolio.model.Mail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class MailService {

    @Autowired
    private JavaMailSender mailSender;

    private final String to = "example@gmail.com";
    private final String from = "example@gmail.com";
    private final String format = "Received mail from %s via Personal Portfolio App\n\n%s";

    public void sendMail(Mail mail){
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(from);
        message.setReplyTo(mail.getReplyTo());
        message.setTo(to);
        message.setSubject(mail.getSubject());
        String text = String.format(format,mail.getName(),mail.getMessage());
        message.setText(text);
        mailSender.send(message);
    }
}
