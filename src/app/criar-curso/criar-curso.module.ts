import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {CriarCursoComponent} from "./criar-curso.component";
import {CursoService} from "../cursos/curso-service";

@NgModule({
  declarations: [
    CriarCursoComponent,

  ],
  imports: [
    CommonModule
  ],
  providers: [CursoService],
  exports: [
    CriarCursoComponent
  ]
})
export class CriarCursoModule { }
