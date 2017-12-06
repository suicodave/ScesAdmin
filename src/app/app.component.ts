import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  candidates = Array();
  list = [
    {
      id: 5,
      name: 'Dave Suico'
    },
    {
      id: 3,
      name: 'Amer Khalid'
    },
    {
      id: 4,
      name: 'Amado Sandoy'
    },
    {
      id: 1,
      name: 'Dario Tejamo'
    }
  ];

  addCandidate(data, event: MatCheckboxChange, limit: number) {

    const length = this.candidates.length;
    if (length != limit) {
      if (event.checked == true) {
        if (this.candidates.indexOf(data) == -1 ) {
          this.candidates.push(data);
        }

      }
    } else {
      const source = event.source;
      source.checked = false;
    }

     if (event.checked === false) {
      const index = this.candidates.indexOf(data);
      this.candidates.splice(index, 1);

    }





  }

  checkCandidates() {
    console.log(this.candidates);

  }
}
