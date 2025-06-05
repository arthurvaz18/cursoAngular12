import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  livro: any = {
    titulo: 'O poder do hábito',
    nota: '4.567',
    numeroPaginas: '678',
    preco: 345.90,
    dataLancamento: new Date(2016, 5, 23),
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
