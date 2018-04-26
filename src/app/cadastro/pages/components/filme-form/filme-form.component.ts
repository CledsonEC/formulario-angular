import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import { FormGroup,FormBuilder} from '@angular/forms';

import { Filme } from '../../../models/filmes';

@Component({
  selector: 'app-filme-form',
  templateUrl: './filme-form.component.html'
})
export class FilmeFormComponent implements OnInit {

  public myform: FormGroup;
  @Input() item: Filme;

  constructor(  private fb: FormBuilder) {
    this.item = {} as Filme;
   }

  ngOnInit() {
    this.myform = this.fb.group({
      id: [this.item.idFilme, []],
      titulo: [this.item.titulo],
      autor: [this.item.autor],
      pais: [this.item.pais],
      genero: [this.item.genero]
    });

    this.item.pais = "Brasil";
  }

  public save(): void {
    const _item = this.myform.value;
    _item.autor = "Teste";        
    this.item = _item
    console.log(_item);
    console.log('----')
    console.log(this.item);
  }

}
