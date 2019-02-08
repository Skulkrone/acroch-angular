import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor() {
    var config = {
      apiKey: "AIzaSyDwokhMwII9Ae8f8h3FiYSJu27SGKl8CMo",
      authDomain: "acroch-47c4d.firebaseapp.com",
      databaseURL: "https://acroch-47c4d.firebaseio.com",
      projectId: "acroch-47c4d",
      storageBucket: "acroch-47c4d.appspot.com",
      messagingSenderId: "429730707722"
    };
    firebase.initializeApp(config);
  }
}
