//Author: Jeremy Stiff jstiff@ggc.edu
import { Component, OnInit } from '@angular/core';

//Needed import to use the Firebase service to get the data
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-jeremy-testing',
  templateUrl: './jeremy-testing.component.html',
  styleUrls: ['./jeremy-testing.component.scss'],
})
export class JeremyTestingComponent implements OnInit {

  constructor(private firebaseservice: FirebaseService) { }

  /*
  * Javascript objects are stored in an array like : [{
    antibiotic: "String"
    bacterium: {Javascript object of bacteria, bacteria: [int, int]}
  }]
  */
  workable_array: any;
  selected_antibiotic: any;
  selected_bacterium: string;
  user_input: number;
  result:number;
  resistance: string;

  //Author: Jeremy Stiff jstiff@ggc.edu
  ngOnInit() {
    //This code is run when the compoent is loaded on the web page
    //This code takes the promise returned from getDataSnapshot() as 'a' and extracts the values to the key and value arrays when the component is initialized
    //Saves database to localStorage, checks to see if enabled first

    if (this.checkLocal) { //Check if localStorage is enabled
      if (localStorage.getItem("data") == null) { //This code executes if localStorage is enabled and data does not exist
        this.firebaseservice.getDataSnapshot()
          .then((a) => {
            console.log("Local data not found. Retreiving from Firebase.");
<<<<<<< HEAD
            console.log(Object.entries(a));
=======
>>>>>>> JeremySolo
            this.workable_array = this.cleanArray(Object.entries(a));
            localStorage.setItem("data", JSON.stringify(this.workable_array));
            console.log(this.workable_array);
          });
      } else { //This code executes if localStorage is enabled and data exists
        console.log("Local data found.")
        this.workable_array = JSON.parse(localStorage.getItem("data"));
        console.log(this.workable_array);
<<<<<<< HEAD
        console.log(this.workable_array[1]);
        console.log(this.workable_array[1]['bacterium']);
        console.log(this.workable_array[1]['bacterium']['Acinetobacter']);
        console.log(this.determineResistance(1, 'Acinetobacter', 14));
        console.log(this.determineResistance(1, 'Acinetobacter', 15));
        console.log(this.determineResistance(1, 'Acinetobacter', 17));
=======
>>>>>>> JeremySolo
      }
    } else { //This code executes if localStorage is not enabled
      console.log("localStorage is not enabled on this browser... loading from Firebase");
      this.firebaseservice.getDataSnapshot()
        .then((a) => {
          this.workable_array = this.cleanArray(Object.entries(a));
          console.log(this.workable_array);
        });
    }
    //localStorage.removeItem("data");
  }

  //Author: Jeremy Stiff jstiff@ggc.edu
  //Function to check if localStorage is enabled on user browser
  private checkLocal(): boolean {
    try {
      const key = "__testing key to determine if localstorage is enabled__";
      localStorage.setItem(key, key);
      localStorage.removeItem(key);
    } catch (e) {
      return false;
    }
    return true;
  }

  //Author: Jeremy Stiff jstiff@ggc.edu
  // -1 resistant, 0 intermediate, 1 susceptable
<<<<<<< HEAD
  determineResistance(antibiotic: number, bacteria: string, input: number): number {
    try {
      let lowhigh: number[] = this.workable_array[antibiotic].bacterium[bacteria];
      if (input < lowhigh[1] && input > lowhigh[0])
        return 0;
=======
  /*
  * This method takes an array index, the exact bacteria name, and the test result as unput and returns an output like above
  * This method is designed around the idea that the front end selection list will list the antibiotic by name but return their index position as the value
  * bacteria should be listed by name and returned by name
  */
  determineResistance(antibiotic: number, bacteria: string, input: number): number {
    try {
      let lowhigh: number[] = this.workable_array[antibiotic]['bacterium'][bacteria];
      if (input >= lowhigh[1])
        return 1;
>>>>>>> JeremySolo
      else if (input <= lowhigh[0])
        return -1;
      else
        return 0;
    } catch (error) {
      console.log("Error while determining resistance");
      console.log(error);
    }
    return 1;
  }

  //Author: Jeremy Stiff jstiff@ggc.edu
  //Function for making the data more workable
  //Desired outcome is an array of javascript objects like:
  // {antibiotic: (string)
  //  bacterium: {javascript object with string/int[] as the key/value pair ex. {bacteria1: [12, 15], ect.} }
  //  }
  private cleanArray(input) {
    let cleanarray = []
    try {
      input.forEach((x) => {
        cleanarray.push({
          antibiotic: x[0],
          bacterium: this.cleanBacteria(x[1])
        });
      });
    } catch (error) {
      console.log("Error while cleaning input array");
      console.log(error);
    }
    return cleanarray;
  }

  //Author: Jeremy Stiff jstiff@ggc.edu
  //UNUSED!!
  //Alternate function for managing the data
  //Data stored as one javascript object with antibiotic as key and clean bacterium list as values
<<<<<<< HEAD
  /*
=======
  //Test of using one large javascript object instead
  /*Data stored as single javascript array
  Formatted like:
    {
      antibiotic 1: {
                    bacteria 1: [12, 15],
                    bacteria 2: [11, 17],
                    ect.
                    }
      antibiotic 2: {
                    ect,
                    ect,
                    ect.
                    }
    }
  */
>>>>>>> JeremySolo
  private testCleanArray(input) {
    let output = {};
    try {
      input.forEach((x) => {
        output[x[0]] = this.cleanBacteria(x[1]);
      });
    } catch (error) {
      console.log("Error while cleaning input array");
      console.log(error);
    }
    return output;
  } */

  //Author: Jeremy Stiff jstiff@ggc.edu
  //Helper function to make the data more usable
  //Takes the origional javascript object bacterium in and changes each bacteria value to an int array instead of a string
  //ex. cleanbacteria({bacteria: "12, 15"}) will return {bacteria: [12, 15]}
  private cleanBacteria(input) {
    let output = {};
    try {
      for (let x in input) {
        output[x] = input[x].split(",").map((y) => {
          return parseInt(y.trim());
        });
      }
    } catch (error) {
      console.log("Error while cleaning bacterium");
      console.log(error);
    }
    return output;
  }

  //Author: Jeremy Stiff jstiff@ggc.edu
  //Function to clean the UI up when user changes antibiotic
  onChangeAntibiotic(): void {
    this.selected_bacterium = undefined;
    this.user_input = undefined;
    this.resistance = undefined;
  }

  //Author: Jeremy Stiff jstiff@ggc.edu
  onChangeBacterium(): void {
    this.user_input = undefined;
    this.resistance = undefined;
  }

  //Author: Jeremy Stiff jstiff@ggc.edu
  onClick() {
    this.result = this.determineResistance(this.workable_array.indexOf(this.selected_antibiotic), this.selected_bacterium, this.user_input);
    if (this.result == -1)
      this.resistance = "Resistant";
    else if (this.result == 0)
      this.resistance = "Intermediate";
    else
      this.resistance = "Susceptible";
  }

  //TODO EXTRA - Create feature to determine likely bacterium based on zone input and antibiotic input. Based on each bacterium's mean middle value aagainst every antibiotic
}


