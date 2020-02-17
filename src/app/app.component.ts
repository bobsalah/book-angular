import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(){
    const firebaseConfig = {
      apiKey: "AIzaSyBw_7bvcazV-ybq2BaQWPWYvBQXUX6OXso",
      authDomain: "books-angular-8018d.firebaseapp.com",
      databaseURL: "https://books-angular-8018d.firebaseio.com",
      projectId: "books-angular-8018d",
      storageBucket: "books-angular-8018d.appspot.com",
      messagingSenderId: "502223356920",
      appId: "1:502223356920:web:3ff82076c4f8ceb7694c0d"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
  
  
  
}
