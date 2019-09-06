import { Component, OnInit, AfterViewInit, ElementRef, NgZone } from '@angular/core';
import { BrowserModule, DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { AuthService } from '../../services/auth.service';
import { TableService } from '../../services/table.service';

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

  tablePosts;


  constructor(
    private sanitizer:DomSanitizer,
    private zone: NgZone,
    private elRef: ElementRef,
    private authService: AuthService,
    private tableService: TableService
  ) {

    // top background image
    this.backgroundImg = sanitizer.bypassSecurityTrustStyle('url("../../../assets/configImages/hero_bg_3.jpeg")');
    // programs schedule images or popular
    this.firstProgramImgCard = sanitizer.bypassSecurityTrustStyle('url("../../../assets/configImages/DanceCardThree.jpeg")');
    this.secondProgramImgCard = sanitizer.bypassSecurityTrustStyle('url("../../../assets/configImages/historyCardTwo.jpeg")');
    this.thirdProgramImgCard = sanitizer.bypassSecurityTrustStyle('url("../../../assets/configImages/newspaperCardFour.jpeg")');
    this.fourthProgramImgCard = sanitizer.bypassSecurityTrustStyle('url("../../../assets/configImages/img_4.jpg")');
  }


  // Function to get all blogs from the database
  getAllTables() {
    // Function to GET all blogs from database
    this.tableService.getAllTables().subscribe(data => {
      this.tablePosts = data.tables; // Assign array to use in HTML
    });
  }

  ngAfterViewInit() {
    // Initialize AOS library
    AOS.init();



    // get table
    this.getAllTables();


  }

}
