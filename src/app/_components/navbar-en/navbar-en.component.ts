import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/app/_services/nav.service';

@Component({
  selector: 'app-navbar-en',
  templateUrl: './navbar-en.component.html',
  styleUrls: ['./navbar-en.component.css']
})
export class NavbarEnComponent implements OnInit {


  language: string;

  constructor(private languageService: NavService) { }

  ngOnInit(): void {
    this.languageService.currentLanguage.subscribe(language => this.language = language);
  }

  changeLang(newLang: string){
    this.languageService.switchLanguage(newLang);
  }


}
