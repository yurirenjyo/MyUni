import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {

  user$: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth) { 
    this.user$ = afAuth.authState;
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}
