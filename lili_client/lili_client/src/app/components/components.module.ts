import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntradaComponent } from './entrada/entrada.component';
import { SalidaComponent } from './salida/salida.component';
import { SalidasComponent } from './salidas/salidas.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    EntradaComponent,
    SalidaComponent,
    SalidasComponent
  ],  
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[
    EntradaComponent,
    SalidasComponent
  ]
})
export class ComponentsModule { }
