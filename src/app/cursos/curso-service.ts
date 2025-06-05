import {EventEmitter, Injectable} from '@angular/core';
import {LogService} from "../services/log.service";

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  emitirCurso = new EventEmitter<string>();

  private cursos: string[]=['Java', 'JavaScript', 'C#'];

  constructor(private logService: LogService) { }

  getCursos(){
    this.logService.consoleLog('Obtendo Lista de cursos: ')
    return this.cursos;
  }

  addCurso(curso: string){
    this.logService.consoleLog('Curso criado: ' + curso)
    this.cursos.push(curso);
    this.emitirCurso.emit(curso);
  }
}
