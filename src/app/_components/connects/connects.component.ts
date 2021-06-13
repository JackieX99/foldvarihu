import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, NgForm } from '@angular/forms';
import { RatingService } from 'src/app/_services/rating.service';

@Component({
  selector: 'app-connects',
  templateUrl: './connects.component.html',
  styleUrls: ['./connects.component.css']
})
export class ConnectsComponent implements OnInit {

  fetching = false;
  ratings = [];

  constructor(private ratingServ: RatingService) { }

  ngOnInit() {
    this.onFetchRatings();
  }


  submitRatingForm(rating) {
    this.onAddRating(rating);
    document.getElementById("ratingForm").classList.add("formSent");
    document.getElementById("ratingFormSentMess").classList.remove("ratingFormMessHide");
    document.getElementById("ratingFormSentMess").classList.add("ratingFormMessShow");
  }

  // Vélemények mentése adatbázisba

  onSaveRatings() {
    this.ratingServ.saveRatings(this.ratings).subscribe(
      (err) => err
    )
  }

  // Vélemény hozzáadása a listához

  onAddRating(rating){
    this.ratings.push({
      ratingName: rating.ratingName,
      ratingMessage: rating.ratingMessage,
    })
    this.onSaveRatings();
  }

  // Értékek lekérése

  onFetchRatings(){
    this.fetching = true;
    this.ratingServ.getRatings().subscribe(
      (response) => {
        const data = JSON.stringify(response);
        this.ratings = JSON.parse(data);
        this.fetching = false;
      },
      (err) => console.log(err)
    )
  }

  getRatings(){
    return this.ratings;
  }



}
