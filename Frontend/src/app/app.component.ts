import {Component, EventEmitter, OnInit} from '@angular/core';
import {ProfileService} from "./profile/profile.service";
import {Profile} from "./profile/profile";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // @ts-ignore
  public profile: Profile;

  data = new EventEmitter<Profile>();

  constructor(private profileService: ProfileService) {
  }


  getProfile() {
    this.profileService.getProfile().subscribe(
      (response: Profile) => {
        this.profile = response;
      },
      (error => {
        alert(error.message);
      }),
      () => {
        console.log(this.profile);
        this.profileService.setProfile(this.profile);
      }
    )
  }

  ngOnInit(): void {
    this.getProfile();
  }
}
