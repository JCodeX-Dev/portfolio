import {Component, HostListener, OnInit} from '@angular/core';
import {Profile} from "../profile/profile";
import {ProfileService} from "../profile/profile.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

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

  @HostListener('window:scroll',['$event'])
  scrollUp($event: Event): void{
    const scrollUp = document.getElementById("scroll-up");
    if(scrollY > 560){
      scrollUp?.classList.add('show-scroll');
    }
    else {
      scrollUp?.classList.remove('show-scroll');
    }

    // scrollY
    // console.log(scrollY)
  }

}
