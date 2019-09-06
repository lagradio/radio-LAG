import { Component, OnInit, AfterViewInit, ElementRef, NgZone  } from '@angular/core';
import { BrowserModule, DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { AuthService } from '../../services/auth.service';
import { CardsService } from '../../services/cards.service';


import '../../../scripts/circleaudioplayer.js';
declare var cap: any;

import * as AOS from '../../../scripts/aos.js';
// import '../../../scripts/main.js'
declare var $: any;






@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  // top background image
  backgroundImg;
  // programs schedule images or popular
  firstImgCard;
  secondImgCard;
  thirdImgCard;
  fourthImgCard;
  // Faces images
  firstPerson;
  secondPerson;
  thirdPerson;
  fourthPerson;
  fifthPerson;
  sixthPerson;

  cardPosts;

  constructor(
    private sanitizer:DomSanitizer,
    private zone: NgZone,
    private elRef: ElementRef,
    private authService: AuthService,
    private cardsService: CardsService

  ) {
    // top background image
    this.backgroundImg = sanitizer.bypassSecurityTrustStyle('url("../../../assets/configImages/hero_bg_3.jpeg")');
    // programs schedule images or popular
    this.firstImgCard = sanitizer.bypassSecurityTrustStyle('url("../../../assets/configImages/card_1img.png")');
    this.secondImgCard = sanitizer.bypassSecurityTrustStyle('url("../../../assets/configImages/historyCardTwo.jpeg")');
    this.thirdImgCard = sanitizer.bypassSecurityTrustStyle('url("../../../assets/configImages/DanceCardThree.jpeg")');
    this.fourthImgCard = sanitizer.bypassSecurityTrustStyle('url("../../../assets/configImages/newspaperCardFour.jpeg")');
    // Faces images
    this.firstPerson = '/assets/configImages/PeopleOrOpinions/person_1.jpeg';
    this.secondPerson = '/assets/configImages/PeopleOrOpinions/person_2.jpg';
    this.thirdPerson = '/assets/configImages/PeopleOrOpinions/person_3.jpg';
    this.fourthPerson = '/assets/configImages/PeopleOrOpinions/person_6.jpg';
    this.fifthPerson = '/assets/configImages/PeopleOrOpinions/person_4.jpg';
    this.sixthPerson = '/assets/configImages/PeopleOrOpinions/person_5.jpg';

  }



  // Function to get all blogs from the database
  getAllCards() {
    // Function to GET all blogs from database
    this.cardsService.getAllCards().subscribe(data => {
      this.cardPosts = data.cards; // Assign array to use in HTML
    });
  }



  ngAfterViewInit() {

      // Call function to appear music canvas container
      cap.appendTo(document.getElementById('playerContainer'));

      // Initialize AOS library
      AOS.init();

      // Jquery carousel & owl carousel init

      if ($(this.elRef.nativeElement).find('.nonloop-block-13').length > 0) {
        $(this.elRef.nativeElement).find('.nonloop-block-13').owlCarousel({
          center: false,
          items: 1,
          loop: true,
          stagePadding: 0,
          autoplay: true,
          margin: 20,
          nav: false,
          dots: true,
          navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
          responsive: {
            600: {
              margin: 20,
              stagePadding: 0,
              items: 1
            },
            1000: {
              margin: 20,
              stagePadding: 0,
              items: 2
            },
            1200: {
              margin: 20,
              stagePadding: 0,
              items: 3
            }
          }
        });
      }

      if ($(this.elRef.nativeElement).find('.slide-one-item').length > 0) {
        $(this.elRef.nativeElement).find('.slide-one-item').owlCarousel({
          center: false,
          items: 1,
          loop: true,
          stagePadding: 0,
          margin: 0,
          autoplay: true,
          pauseOnHover: false,
          nav: true,
          animateOut: 'fadeOut',
          animateIn: 'fadeIn',
          navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">']
        });
      }


      if ($(this.elRef.nativeElement).find('.nonloop-block-4').length > 0) {
        $(this.elRef.nativeElement).find('.nonloop-block-4').owlCarousel({
          center: true,
          items: 1,
          loop: false,
          margin: 10,
          nav: true,
          navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
          responsive: {
            600: {
              items: 1
            }
          }
        });
      }
    // end carousel

    // get top cards
    this.getAllCards();


  }

}
