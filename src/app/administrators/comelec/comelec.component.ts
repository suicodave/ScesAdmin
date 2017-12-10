import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-comelec',
  templateUrl: './comelec.component.html',
  styleUrls: ['./comelec.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ComelecComponent implements OnInit {
  enableDeleted = false;
  constructor() { }

  ngOnInit() {
  }
  
  toggleShowDeleted() {
    
    
    return (this.enableDeleted == false) ? this.enableDeleted = true : this.enableDeleted = false ;
  }

}
