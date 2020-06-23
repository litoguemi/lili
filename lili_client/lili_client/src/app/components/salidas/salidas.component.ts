import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-salidas',
  templateUrl: './salidas.component.html',
  styleUrls: ['./salidas.component.scss'],
})
export class SalidasComponent implements OnInit {

  @Input() texts:any[] = [];
  
  constructor() { }

  ngOnInit(){
    console.log("ConversaSalidas:",this.texts);
  }  
}
