import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { ItemLista } from './itemlista';
@Component({
  selector: 'app-compras',
  imports: [FormsModule],
  templateUrl: './compras.html',
  styleUrl: './compras.scss'
})
export class Compras {
      item: string = '';

      lista: ItemLista[] = [];

      adicionarItem(){
        // console.log('Item Recebido', this.item);

        let itemLista = new ItemLista();
        itemLista.nome = this.item;
        itemLista.id = this.lista.length + 1;

        this.lista.push(itemLista);

        this.item = '';

        console.table(this.lista)
      }

}
