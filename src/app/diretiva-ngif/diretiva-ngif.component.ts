import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.css']
})
export class DiretivaNgifComponent implements OnInit {

  numero: boolean = true;

  ocultarNumero(){
    this.numero = false;
  }
  apresentarNumero(){
    this.numero = true;
  }
  constructor() {
  }

  ngOnInit(): void {
  }

}
