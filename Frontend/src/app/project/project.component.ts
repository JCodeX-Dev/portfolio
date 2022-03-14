import {AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import Swiper, {Navigation, Pagination, SwiperOptions, Virtual} from "swiper";
import { SwiperComponent } from 'swiper/angular';
import {Profile} from "../profile/profile";
import {ProfileService} from "../profile/profile.service";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectComponent implements OnInit {

  config: SwiperOptions = {};
  @ViewChild('swiper') swiper?: SwiperComponent

  // @ts-ignore
  profile: Profile
  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.getProfile();

    Swiper.use([Pagination, Navigation]);
    // install Swiper modules
    this.config = {
      cssMode: true,
      loop: true,
      navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev'

      },
      pagination: {
        el: '.pagination',
        clickable: true,
      }
    }
  }

  getProfile(){
    this.profileService.profileData.subscribe(
      data => {
        this.profile = data;
      }
    )
  }

}
