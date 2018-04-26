import { Component, OnInit } from '@angular/core';
import { Filme } from '../../models/filmes';

@Component({
  selector: 'app-filme-page',
  templateUrl: './filme-page.component.html'
})
export class FilmePageComponent implements OnInit {

  public item: Filme;
  constructor() { }

  ngOnInit() {
    this.item = {} as Filme;
  }

}
