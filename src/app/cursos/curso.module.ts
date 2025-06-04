import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {CursoService} from "../cursos/curso-service";
import {CursosComponent} from "./cursos.component";

@NgModule({
  declarations: [
    CursosComponent,

  ],
  imports: [
    CommonModule
  ],
  providers: [CursoService],
  exports: [
    CursosComponent
  ]
})
export class CursoModule { }
