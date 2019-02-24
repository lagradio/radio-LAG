import { Component, OnInit, AfterViewInit, ElementRef, NgZone } from '@angular/core';
import { BrowserModule, DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { PagerService } from '../../services/index'

import * as AOS from '../../../scripts/aos.js';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements AfterViewInit {
  // top background image
  backgroundImg;

  allnews;
  NewImagePath: string;



  constructor(
    private sanitizer:DomSanitizer,
    private zone: NgZone,
    private elRef: ElementRef,
    private http: Http,
    private pagerService: PagerService,
  ) {

    // top background image
    this.backgroundImg = sanitizer.bypassSecurityTrustStyle('url("../../../assets/configImages/hero_bg_3.jpeg")');

    this.NewImagePath = '/assets/NewsPageImages/';

  }


  // array of all items to be paged
  private allItems: any[];

  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];



  ngAfterViewInit() {

    // Initialize AOS library
    AOS.init();

    this.http.get('/assets/jsonsfiles/news.json')
      .map((response: Response) => response.json())
      .subscribe(data => {
        this.allnews = data;
        this.allItems = data;

        // initialize to page 1
        this.setPage(1);

      });


  }



  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }

    // get pager object from service
    this.pager = this.pagerService.getPager(this.allItems.length, page);

    // get current page of items
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }



}
