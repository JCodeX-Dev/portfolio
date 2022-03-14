import {Component, HostListener, OnInit} from '@angular/core';
import {Profile} from "../profile/profile";
import {ProfileService} from "../profile/profile.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // @ts-ignore
  profile: Profile
  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile() {
    this.profileService.profileData.subscribe(
      data => {
        this.profile = data;
      }
    )
  }

  @HostListener('window:scroll',['$event'])
  scrollEvent() {
    //header on scroll
    const nav = document.getElementById('header');
    // console.log("window"+scrollY);
    if (scrollY>60){
      nav?.classList.add('scroll-header');
    }
    else {
      nav?.classList.remove('scroll-header')
    }

    //Active link on scroll
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(current => {
      const sectionHeight = current.clientHeight;
      // @ts-ignore
      const sectionTop = current.parentElement.offsetTop - 65;
      let sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop+sectionHeight){
        // @ts-ignore
        document.querySelector('.nav_menu a[href*='+sectionId+']').classList.add('active-link');
      }
      else {
        // @ts-ignore
        document.querySelector('.nav_menu a[href*='+sectionId+']').classList.remove('active-link');
      }
    })

  }

  showMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu?.classList.add('show-menu');
  }

  closeMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu?.classList.remove('show-menu');
  }

    // @HostListener('window:scroll',['$event'])
    // scrollActive(){
    //   // console.log(scrollY);
    // }


}
