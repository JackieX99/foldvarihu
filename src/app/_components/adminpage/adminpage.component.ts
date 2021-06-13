import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { AuthService } from 'src/app/_auth/auth.service';
import { RatingService } from 'src/app/_services/rating.service';
import { ConnectsComponent } from '../connects/connects.component';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit, OnDestroy {

  constructor(private authServ: AuthService, private router: Router, private ratingServ: RatingService) { }

  currentUser;

  editedRating: number;

  adminEmails = [
    'foldvarialex2003@gmail.com'
  ];

  ratings = [];

  ngOnInit(): void {
    this.authServ.getToken() == null ? this.takeBackToLog() : '';
    this.currentUser = this.authServ.getCurrentUser();
    this.onFetchRatings();
    this.getViewCount();
  }

  ngOnDestroy(){
    this.logout();
  }

  logout(){
    this.authServ.logout();
  }

  takeBackToLog(){
    this.router.navigate(['/signin']);
  }

  onFetchRatings(){
    this.ratingServ.getRatings().subscribe(
      (response) => {
        const data = JSON.stringify(response);
        this.ratings = JSON.parse(data);
      },
      (err) => console.log(err)
    )
  }


  editRating(rating){
    (<HTMLInputElement>document.getElementById("ratingName")).value = this.ratings[rating].ratingName;
    (<HTMLInputElement>document.getElementById("ratingMessage")).value = this.ratings[rating].ratingMessage;
    this.editedRating = rating;
  }

  updateRating(f){
    this.ratings[this.editedRating] = f;
    this.onSaveRatings();
    document.getElementById("responsemess").innerHTML = "Sikeres mentés.";
    setTimeout(() => {
      document.getElementById("responsemess").innerHTML = "";
    }, 5000)
  }

  deleteRating(rating){
    if(confirm('Biztosan törlöd a véleményt?')){
      this.ratings.splice(rating, 1);
      this.onSaveRatings();
    }
  }

  onSaveRatings() {
    this.ratingServ.saveRatings(this.ratings).subscribe(
      (err) => err
    )
  }

  getViewCount(){
    fetch('https://api.countapi.xyz/get/foldvari/portfolio/')
    .then(res => res.json())
    .then(res => {
      this.adminEmails.includes(this.currentUser) ? document.getElementById("visitCount").innerHTML = res.value : '';
    })
  }

}
