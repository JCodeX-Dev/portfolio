import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Profile} from "../profile/profile";
import {ProfileService} from "../profile/profile.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

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
