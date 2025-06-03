import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.css']
})
export class DiretivaNgifComponent implements OnInit {

  numero: boolean = false;

  ocultarNumero(){
    this.numero = true;
  }
  apresentarNumero(){
    this.numero = false;
  }
  constructor() {
  }

  ngOnInit(): void {
  }

}
