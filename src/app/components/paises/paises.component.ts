import { PaisesService } from './../../services/paises.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

  paises$: Array<any>;
  totalPages: Array<number>;
  page = 0;
  size = 5;
  order = 'idPais';
  asc = true;
  isFirst = false;
  isLast = false;
  constructor(private paisService: PaisesService) { }

  ngOnInit(): void {
    this.cargarPaises();
  }

  cargarPaises(): void {
    this.paisService.paises(this.page, this.size, this.order, this.asc).subscribe(
      data => {
        this.paises$ = data.content;
        this.isFirst = data.first;
        this.isLast = data.last;
        this.totalPages = new Array(data.totalPages);
        console.log(data);
      }
    );
  }
  sort(): void {
    this.asc = !this.asc;
    this.cargarPaises();
  }

  rewind(): void {
    if (!this.isFirst){
      this.page--;
      this.cargarPaises();
    }
  }

  forward(): void {
    if (!this.isLast){
      this.page++;
      this.cargarPaises();
    }
  }

  setPage(page: number): void {
    this.page = page;
    this.cargarPaises();
  }

  setOrder(order: string): void {
    this.order = order;
    this.cargarPaises();
  }
}
