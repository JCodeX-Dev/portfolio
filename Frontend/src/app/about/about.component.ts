import { Component, OnInit } from '@angular/core';
import {Profile} from "../profile/profile";
import {ProfileService} from "../profile/profile.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  // @ts-ignore
  profile: Profile
  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile(){
    this.profileService.profileData.subscribe(
      data => {
        this.profile = data;
      }
    )
  }

}
