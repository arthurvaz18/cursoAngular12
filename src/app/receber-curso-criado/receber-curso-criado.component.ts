import { Component, OnInit } from '@angular/core';
import {CursoService} from "../cursos/curso-service";

@Component({
  selector: 'app-receber-curso-criado',
  templateUrl: './receber-curso-criado.component.html',
  styleUrls: ['./receber-curso-criado.component.css']
})
export class ReceberCursoCriadoComponent implements OnInit {

  curso: string ='';

  constructor(private cursoService: CursoService) { }

  ngOnInit(): void {
    this.cursoService.emitirCurso.subscribe(
      cursoCriado=> this.curso = cursoCriado
    )
  }

}
