// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { Injectable } from '@angular/core';

@Injectable()
export class FirebaseService {
  constructor() {}
}

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCHkJBIrAvYEJBNZC1rDEnETLghDFRuNR8',
  authDomain: 'antibiotic-resistance-app.firebaseapp.com',
  databaseURL: 'https://antibiotic-resistance-app-default-rtdb.firebaseio.com',
  projectId: 'antibiotic-resistance-app',
  storageBucket: 'antibiotic-resistance-app.appspot.com',
  messagingSenderId: '965395585433',
  appId: '1:965395585433:web:7ff21515ab81cb69775b08',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
