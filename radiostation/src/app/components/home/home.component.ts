import { Component, OnInit } from '@angular/core';
import { BrowserModule, DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  backgroundImg;
  firstImgCard;
  secondImgCard;
  thirdImgCard;
  fourthImgCard;


  constructor(
    private sanitizer:DomSanitizer
  ) {
    // this.backgroundImg = '../../../assets/configImages/hero_bg_3.jpg';
    this.backgroundImg = sanitizer.bypassSecurityTrustStyle('url("../../../assets/configImages/hero_bg_3.jpg")');
    this.firstImgCard = sanitizer.bypassSecurityTrustStyle('url("../../../assets/configImages/img_1.jpg")');
    this.secondImgCard = sanitizer.bypassSecurityTrustStyle('url("../../../assets/configImages/img_2.jpg")');
    this.thirdImgCard = sanitizer.bypassSecurityTrustStyle('url("../../../assets/configImages/img_3.jpg")');
    this.fourthImgCard = sanitizer.bypassSecurityTrustStyle('url("../../../assets/configImages/img_4.jpg")');
  }

  ngOnInit() {
  }

}
