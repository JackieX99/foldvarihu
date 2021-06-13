import { Router } from '@angular/router';

import { Injectable } from '@angular/core';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

@Injectable()
export class AuthService {
  token: any = null;

  currentUser;

  constructor(private router: Router) { }

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        response => {
          this.currentUser = response.user.email;
          this.router.navigate(['/dashboard']);
          firebase.auth().currentUser?.getIdToken()
            .then(
              (token: string) => this.token = token
            )
        })
      .catch (
    error => {
      document.querySelector("#signup-form").querySelector('.error').innerHTML = error.message;
    }
      )
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.currentUser = response.user.email;
          this.router.navigate(['/dashboard']);
          firebase.auth().currentUser?.getIdToken()
            .then(
              (token: string) => this.token = token
            )
        }
      )
      .catch(
        error => console.log(error)
      );
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
    this.router.navigate(['/signin']);
  }

  getCurrentUser(){
    return this.currentUser;
  }

  getToken() {
    firebase.auth().currentUser?.getIdToken()
      .then(
        (token: string) => this.token = token
      );
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }
}
