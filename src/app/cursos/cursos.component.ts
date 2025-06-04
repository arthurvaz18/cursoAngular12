import {Component, OnInit} from '@angular/core';
import {CursoService} from "./curso-service";

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: string[] = [];

  constructor(private mainService: CursoService) {
  }

  ngOnInit(): void {
    this.cursos = this.mainService.getCursos()
  }

  adicionaCurso(curso: string) {
    this.mainService.addCurso(curso)
  }
}
