import { Component, OnInit, OnDestroy } from '@angular/core';
import { LiliService } from '../services/lili.service';
import { Location } from '@angular/common';
import { Event } from 'typescript.events';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy{

  sessionId = "";
  confirm   = "";
  text=""
  envios: any[] = [];
  
  constructor(private lili: LiliService,
              private location: Location,
              public event: Event) {
                this.event.on('respuesta', () => {
                  this.actualizaRespuesta();
                });
              }

  ngOnInit(){    
    this.obtenerSesion();    
  }

  ngOnDestroy(){
    this.lili.cerrarSesion(this.sessionId)
    .subscribe((confirm:any)=> {
      console.log(confirm);
      this.confirm = confirm.response.statusText
      if(this.confirm == "OK"){
        localStorage.setItem("sessionId",JSON.stringify(''));
      }
    });
  }

  obtenerSesion(){
    this.lili.abrirSesion()
    .subscribe((sesion:any)=>{
      console.log("Id sesion:",sesion);
      this.sessionId = sesion.response.result.session_id
      if(this.sessionId != ''){
        localStorage.setItem("sessionId",JSON.stringify(this.sessionId));
      }
    })
  }

  actualizaRespuesta(){
    this.sessionId = JSON.parse(localStorage.getItem("sessionId"));
    this.envios = this.lili.response
  }
}
