import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ng-for',
  templateUrl: './diretiva-ng-for.component.html',
  styleUrls: ['./diretiva-ng-for.component.css']
})
export class DiretivaNgForComponent implements OnInit {

  listGames: string[] = ['Dayz',
    'Fifa',
    'Far-Cry',
    'Black'];

  constructor() { }

  ngOnInit(): void {
  }

}
