import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';
import { DiretivaNgSwitchCaseComponent } from './diretiva-ng-switch-case/diretiva-ng-switch-case.component';
import { DiretivaNgForComponent } from './diretiva-ng-for/diretiva-ng-for.component';
import { DiretivaNgClassComponent } from './diretiva-ng-class/diretiva-ng-class.component';
import { DiretivaNgStyleComponent } from './diretiva-ng-style/diretiva-ng-style.component';
import {FormsModule} from "@angular/forms";
import { OperadorElvisComponent } from './operador-elvis/operador-elvis.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { FundoAzulDirective } from './template/fundo-azul.directive';
import { DiretivasCustomizadasComponent } from './diretivas-customizadas/diretivas-customizadas.component';
import { DestacandoMouseDirective } from './template/destacando-mouse.directive';
import { HostListenerHostBindingComponent } from './host-listener-host-binding/host-listener-host-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    DiretivaNgifComponent,
    DiretivaNgSwitchCaseComponent,
    DiretivaNgForComponent,
    DiretivaNgClassComponent,
    DiretivaNgStyleComponent,
    OperadorElvisComponent,
    NgContentComponent,
    FundoAzulDirective,
    DiretivasCustomizadasComponent,
    DestacandoMouseDirective,
    HostListenerHostBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
