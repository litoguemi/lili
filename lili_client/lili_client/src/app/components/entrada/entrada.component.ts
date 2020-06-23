import { Component, OnInit, Input, Output } from '@angular/core';
import { LiliService } from 'src/app/services/lili.service';
import { SalidasComponent } from '../salidas/salidas.component';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.scss'],
})
export class EntradaComponent implements OnInit {

  @Input() session: string;
  componentText = "";
  

  response: any[] = [{}]

  constructor(private lili:LiliService) { }

  ngOnInit() {}

  pregunta(){
    this.lili.conversar(this.componentText, this.session);
    this.limpia();
  }

  limpia(){
    this.componentText = "";
  }

}
