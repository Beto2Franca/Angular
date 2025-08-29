import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
@Component({
  selector: 'app-compras',
  imports: [FormsModule],
  templateUrl: './compras.html',
  styleUrl: './compras.scss'
})
export class Compras {
      item: string = '';

      adicionarItem(){
        console.log('Item Recebido', this.item);
        this.item='';
      }

}
