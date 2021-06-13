import { Component } from '@angular/core';
import firebase from 'firebase';
import { NavService } from './_services/nav.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  language: string;
  


  constructor(private languageService: NavService) { }

  ngOnInit(): void {
    this.languageService.currentLanguage.subscribe(language => this.language = language);
    firebase.initializeApp({
      apiKey: "AIzaSyA_ezTMrMne-XaMwLRp35EAnrKuTL4SzVA",
      authDomain: "foldvariportfolio.firebaseapp.com",
    });
    this.updateVisitCount();
  }

  updateVisitCount(){
    fetch('https://api.countapi.xyz/update/foldvari/portfolio/?amount=1')
  }


}
