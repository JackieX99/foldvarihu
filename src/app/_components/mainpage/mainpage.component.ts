import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { faImage, faFileAlt, faBug, faCubes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css'],
  providers: [NgbCarouselConfig]
})
export class MainpageComponent implements OnInit {

  faImage = faImage;
  faFileAlt = faFileAlt;
  faBug = faBug;
  faCubes = faCubes;

  showNavigationArrows = false;
  showNavigationIndicators = false;


  constructor(config: NgbCarouselConfig) {
    config.interval = 5000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
    config.showNavigationArrows = false;
    config.showNavigationIndicators = false;
  }

  ngOnInit(): void {
  }



}
