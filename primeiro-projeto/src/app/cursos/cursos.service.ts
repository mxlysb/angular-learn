import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  getBonequinhos() {
    return ['yumi', 'anie', 'zoi', 'maufaite'];
  }
}
