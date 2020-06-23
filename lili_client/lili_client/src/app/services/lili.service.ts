import { Injectable, Output } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Event } from 'typescript.events';
import { environment } from 'src/environments/environment';

const URL = environment.url;


@Injectable({
  providedIn: 'root'
})
export class LiliService {

  response:any[] = [{}];

  constructor(private http: HttpClient,
              public event: Event) { }

  abrirSesion(){
    console.log("Abriendo Sesion.....");
    return this.http.post(`${URL}/abrirsesion`,{})
  }

  cerrarSesion(sessionId ){
    console.log("Cerrando Sesion.....",sessionId);
    return this.http.post(`${URL}/cerrarsesion`,{sessionId})
  }

  conversar(text, sessionId){
    console.log("Preguntando LILI.....",sessionId);
    return this.http.post(`${URL}/conversa`,{text, sessionId})
      .subscribe((response : any) => {
        console.log("respuesta:",response);
        this.response = response.response.result.output.generic;
        console.log("Objeto para emitir",this.response);
        this.event.emit('respuesta');
      });    
  }
}
