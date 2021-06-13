import { HttpClient, HttpHeaders, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class RatingService {

  constructor(private http: HttpClient) { }

  private headers = new HttpHeaders({'Content-Type' : 'application/json'});

  saveRatings(ratings: any){
    return this.http.put('https://foldvariportfolio-default-rtdb.firebaseio.com/ratings.json', ratings, {headers: this.headers});
  }

  getRatings(){
    return this.http.get('https://foldvariportfolio-default-rtdb.firebaseio.com/ratings.json');
  }

  
}
