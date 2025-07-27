import { Component } from '@angular/core';
import {Calculadora} from './calculadora/calculadora'
@Component({
  selector: 'app-root',
  imports: [Calculadora],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'pagina01';
}
