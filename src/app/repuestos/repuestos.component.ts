// import { Component, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Repuesto } from 'src/app/interfaces/repuesto';


@Component({
   selector: 'app-modelos',
   templateUrl: './repuestos.component.html',
   styleUrls: ['./repuestos.component.css']
})
// export class ModelosComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

export class RepuestosComponent {
 // .................................................... AUTOS ......................................................//
// .................................................... AUTO01 ......................................................//
  public Repuesto01: Repuesto = {
    id: 1,
    nombre: "LLantas PCR",
    marca: "Kia",
    imagen: "https://www.imporcadi.com/wp-content/uploads/2021/07/llanta-trailer.png",
    precio: 400
  };
// .................................................... REPUESTO02 ......................................................//
  public Repuesto02: Repuesto = {
    id: 2,
    nombre: "Timones",
    marca: "Kia",
    imagen: "https://www.nicepng.com/png/full/338-3380707_mazda-gt-custom-steering-wheel.png",
    precio: 680
  };
// .................................................... REPUESTO03 ......................................................//
  public Repuesto03: Repuesto = {
    id: 3,
    nombre: "Faroles",
    marca: "Kia",
    imagen: "https://scdn.autoersatzteile.de/catalog/categories/513x196/27.png?rev=94077826",
    precio: 1280
  };
// .................................................... REPUESTO04 ......................................................//
public Repuesto04: Repuesto = {
  id: 4,
  nombre: "Pedales",
  marca: "Kia",
  imagen: "https://www.apex.mx/wp-content/uploads/2015/06/pedales-fanatec-2.png",
  precio: 2900

};
// .................................................... REPUESTO05 ......................................................//
public Repuesto05: Repuesto = {
  id: 5,
  nombre: "Aceleron",
  marca: "Kia",
  imagen: "https://s.alicdn.com/@sc04/kf/H13f2ba79b83748559160981e67597059H.png_300x300.png",
  precio: 3960
};
// .................................................... REPUESTO06 ......................................................//
public Repuesto06: Repuesto = {
  id: 6,
  nombre: "Alfombra",
  marca: "Kia",
  imagen: "https://www.adnautos.com/web/image/15772/UCM-503B-1-1.png?access_token=d9a4c1c3-1bd9-4ca2-b64f-80f103d866f4",
  precio: 990
};
public estadoBoton: boolean = false;

onDatos(): void {
  console.log(this.Repuesto01);
  console.log(this.Repuesto02);
  console.log(this.Repuesto03);
  console.log(this.Repuesto04);
  console.log(this.Repuesto05);
  console.log(this.Repuesto06);
}
}
