import { Component, OnInit } from '@angular/core';
import {ProfileService} from "../profile/profile.service";
import {NgForm, NgModel} from "@angular/forms";
import {Mail} from "../profile/mail";
import {interval} from "rxjs";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact = {
    name: '',
    mail: '',
    subject: '',
    message: '',
    send: ''
  }

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
  }

  sendMail(mailForm: NgForm){
    // console.log("sending");

    if(this.validate(mailForm)) {
      this.profileService.sendMail(mailForm.value).subscribe(() => console.log("send successfull"));
      mailForm.resetForm();
      this.toastConfirmation();
    }
    else {
      mailForm.control.markAllAsTouched();
    }
    // this.toastConfirmation();
  }

  validate(mailForm: NgForm): boolean{
    if(!mailForm.invalid){
      return true;
    }
    return false;
  }

  private toastConfirmation() {
    const toast = document.getElementById("snackbar");
    // @ts-ignore
    toast.classList.add('show');
    // @ts-ignore
    interval(3000).subscribe(() => toast.classList.remove('show'));
  }
}
