import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {CriarCursoComponent} from "./criar-curso.component";
import {CursoService} from "../cursos/curso-service";
import {ReceberCursoCriadoComponent} from "../receber-curso-criado/receber-curso-criado.component";

@NgModule({
  declarations: [
    CriarCursoComponent,
    ReceberCursoCriadoComponent

  ],
  imports: [
    CommonModule
  ],
  providers: [CursoService],
  exports: [
    CriarCursoComponent,
    ReceberCursoCriadoComponent
  ]
})
export class CriarCursoModule { }
