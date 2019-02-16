import { Component, OnInit } from '@angular/core';
import * as AOS from '../../../scripts/aos.js';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Initialize AOS library
    AOS.init();
  }

}
