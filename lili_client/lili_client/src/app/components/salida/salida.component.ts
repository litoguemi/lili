import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-salida',
  templateUrl: './salida.component.html',
  styleUrls: ['./salida.component.scss'],
})
export class SalidaComponent implements OnInit {

  @Input() text: any = {};

  constructor() { }

  ngOnInit() {
    console.log("Conversa:",this.text.text);
  }

}
