import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  private defaltLanguage = new BehaviorSubject("hu");
  currentLanguage = this.defaltLanguage.asObservable();

  constructor() { }

  switchLanguage(language: string){
    this.defaltLanguage.next(language)
  }

}
