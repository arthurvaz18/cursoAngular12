import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-customizadas',
  templateUrl: './diretivas-customizadas.component.html',
  styleUrls: ['./diretivas-customizadas.component.css']
})
export class DiretivasCustomizadasComponent implements OnInit {
  numero: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  ocultarNumero(){
    this.numero = false;
  }
  apresentarNumero(){
    this.numero = true;
  }

}
