import { Component, OnInit, AfterViewInit, ElementRef, NgZone } from '@angular/core';
import { BrowserModule, DomSanitizer, SafeStyle } from '@angular/platform-browser';
import * as AOS from '../../../scripts/aos.js';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})
export class ProgramsComponent implements AfterViewInit {
  // top background image
  backgroundImg;
  // programs card
  firstProgramImgCard;
  secondProgramImgCard;
  thirdProgramImgCard;
  fourthProgramImgCard;


  constructor(
    private sanitizer:DomSanitizer,
    private zone: NgZone,
    private elRef: ElementRef
  ) {

    // top background image
    this.backgroundImg = sanitizer.bypassSecurityTrustStyle('url("../../../assets/configImages/hero_bg_3.jpeg")');
    // programs schedule images or popular
    this.firstProgramImgCard = sanitizer.bypassSecurityTrustStyle('url("../../../assets/configImages/img_1.jpg")');
    this.secondProgramImgCard = sanitizer.bypassSecurityTrustStyle('url("../../../assets/configImages/img_2.jpg")');
    this.thirdProgramImgCard = sanitizer.bypassSecurityTrustStyle('url("../../../assets/configImages/img_3.jpg")');
    this.fourthProgramImgCard = sanitizer.bypassSecurityTrustStyle('url("../../../assets/configImages/img_4.jpg")');
  }

  ngAfterViewInit() {
    // Initialize AOS library
    AOS.init();
  }

}
