package dev.jcodex.portfolio.controller;

import dev.jcodex.portfolio.model.Mail;
import dev.jcodex.portfolio.model.Profile;
import dev.jcodex.portfolio.service.MailService;
import dev.jcodex.portfolio.service.ProfileService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "api/v1/profile")
@AllArgsConstructor
@CrossOrigin(origins = {"http://localhost:4200"})
public class ProfileController extends Controller {

    private final ProfileService profileService;
    private final MailService mailService;

    @GetMapping("/getprofile/{username}")
    public Profile getProfile(@PathVariable String username){
        return profileService.getProfile(username);
    }


    @PostMapping("sendmail")
    public void sendMail(@RequestBody Mail mail){
        System.out.println(mail);
        mailService.sendMail(mail);
    }

}
