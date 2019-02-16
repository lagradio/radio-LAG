import { Component, OnInit, AfterViewInit, ElementRef, NgZone } from '@angular/core';
import { BrowserModule, DomSanitizer, SafeStyle } from '@angular/platform-browser';
import * as AOS from '../../../scripts/aos.js';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements AfterViewInit {
  // top background image
  backgroundImg;

  constructor(
    private sanitizer:DomSanitizer,
    private zone: NgZone,
    private elRef: ElementRef
  ) {

    // top background image
    this.backgroundImg = sanitizer.bypassSecurityTrustStyle('url("../../../assets/configImages/hero_bg_3.jpeg")');

  }

  ngAfterViewInit() {
    // Initialize AOS library
    AOS.init();
  }

}
