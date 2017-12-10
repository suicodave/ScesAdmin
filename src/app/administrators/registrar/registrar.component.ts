import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RegistrarComponent implements OnInit {
  itemsPerPageLabel;
  enableDeleted = false;
  constructor(private asd: MatPaginatorIntl) {
    
    console.log(this.asd);
    
  }

  ngOnInit() {

  }

  toggleShowDeleted() {
    
    return (this.enableDeleted == false) ? this.enableDeleted = true : this.enableDeleted = false ;
  }

}
