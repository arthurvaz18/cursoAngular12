import { Component, OnInit } from '@angular/core';
import {CursoService} from "../service/curso-service";

@Component({
  selector: 'app-service-estudo',
  templateUrl: './service-estudo.component.html',
  styleUrls: ['./service-estudo.component.css']
})
export class ServiceEstudoComponent implements OnInit {

  constructor(private mainService: CursoService) { }

  ngOnInit(): void {
  }

}
