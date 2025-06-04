import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private cursos: string[]=['Java', 'JavaScript', 'C#'];

  constructor() { }

  getCursos(){
    return this.cursos;
  }
  addCurso(curso: string){
    this.cursos.push(curso);
  }
}
