import { Component, OnInit, AfterViewInit, ElementRef, NgZone } from '@angular/core';
import { BrowserModule, DomSanitizer, SafeStyle } from '@angular/platform-browser';
import * as AOS from '../../../scripts/aos.js';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements AfterViewInit {
  // top background image
  backgroundImg;
  // teamMembers images
  firstMember;
  secondMember;
  thirdMember;
  fourthMember;
  fifthMember;
  sixthMember;

  constructor(
    private sanitizer:DomSanitizer,
    private zone: NgZone,
    private elRef: ElementRef
  ) {
    // top background image
    this.backgroundImg = sanitizer.bypassSecurityTrustStyle('url("../../../assets/configImages/hero_bg_3.jpeg")');
    // TeamMembers images
    this.firstMember = '/assets/configImages/Teammembers/person_1.jpeg';
    this.secondMember = '/assets/configImages/Teammembers/person_2.jpg';
    this.thirdMember = '/assets/configImages/Teammembers/person_3.jpg';
    this.fourthMember = '/assets/configImages/Teammembers/person_6.jpg';
    this.fifthMember = '/assets/configImages/Teammembers/person_4.jpg';
    this.sixthMember = '/assets/configImages/Teammembers/person_5.jpg';
  }

  ngAfterViewInit() {
    // Initialize AOS library
    AOS.init();
  }

}
