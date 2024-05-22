import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'a-nav',
  templateUrl: './a-nav.component.html',
  styleUrls: ['./a-nav.component.scss']
})
export class ANavComponent implements OnInit {

  title$: any; // Observable que contiene el valor del título

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.title$ = this.activatedRoute.data; // Suponiendo que data contiene el título
    // Alternativamente, puedes suscribirte a una propiedad de datos específica
    // this.title$ = this.activatedRoute.data.subscribe(data => data['title']);
  }
}
