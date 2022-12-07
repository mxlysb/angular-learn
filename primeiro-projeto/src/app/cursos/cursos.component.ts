import { Component } from '@angular/core';
import { CursosService } from './cursos.service'; 

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent {

  nomeLol: string;
  bonequinhos: string[];

  constructor(private cursosService: CursosService) {
    this.nomeLol = 'https://www.leagueoflegends.com/pt-br/';
    this.bonequinhos = this.cursosService.getBonequinhos();
  }

}
