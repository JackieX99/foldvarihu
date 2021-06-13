import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/app/_services/nav.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {


  language: string;

  constructor(private languageService: NavService) { }

  ngOnInit(): void {
    this.languageService.currentLanguage.subscribe(language => this.language = language);
  }

  changeLang(newLang: string){
    this.languageService.switchLanguage(newLang);
  }





}
