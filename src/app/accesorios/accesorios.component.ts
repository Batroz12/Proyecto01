// import { Component, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Accesorio } from 'src/app/interfaces/accesorio';

@Component({
   selector: 'app-modelos',
   templateUrl: './accesorios.component.html',
   styleUrls: ['./accesorios.component.css']
})


export class AccesoriosComponent {
 // .................................................... AUTOS ......................................................//
// .................................................... AUTO01 ......................................................//
  public Accesorio01: Accesorio = {
    id: 1,
    nombre: "Reproductor",
    marca: "Kia",
    imagen: "https://cdn.autoteiledirekt.de/thumb?id=15750846&m=0&n=0&lng=es&rev=94077826",
    precio: 2100
  };
// .................................................... AUTO02 ......................................................//
  public Accesorio02: Accesorio = {
    id: 2,
    nombre: "Tapabucos",
    marca: "Kia",
    imagen: "https://media.autoteiledirekt.de/360_photos/16368508/preview.jpg",
    precio: 2680
  };
// .................................................... AUTO03 ......................................................//
  public Accesorio03: Accesorio = {
    id: 3,
    nombre: "Cubre Asientos",
    marca: "Kia",
    imagen: "https://cdn.autoteiledirekt.de/thumb?id=13626718&m=0&n=0&lng=es&rev=94077826",
    precio: 280
  };
// .................................................... AUTO04 ......................................................//
public Accesorio04: Accesorio = {
  id: 4,
  nombre: "Cable de Carga",
  marca: "Kia",
  imagen: "https://cdn.autoteiledirekt.de/thumb?id=17835260&m=0&n=0&lng=es&rev=94077826",
  precio: 900

};
// .................................................... AUTO05 ......................................................//
public Accesorio05: Accesorio = {
  id: 5,
  nombre: "Luz Advertencia",
  marca: "Kia",
  imagen: "https://cdn.autoteiledirekt.de/thumb?id=17165369&m=0&n=0&lng=es&rev=94077826",
  precio: 3960
};
// .................................................... AUTO06 ......................................................//
public Accesorio06: Accesorio = {
  id: 6,
  nombre: "Cuña de Ruedas",
  marca: "Kia",
  imagen: "https://cdn.autoteiledirekt.de/thumb?id=14347350&m=0&n=0&lng=es&rev=94077826",
  precio: 990
};
public estadoBoton: boolean = false;

onDatos(): void {
  console.log(this.Accesorio01);
  console.log(this.Accesorio02);
  console.log(this.Accesorio03);
  console.log(this.Accesorio04);
  console.log(this.Accesorio05);
  console.log(this.Accesorio06);
}
}
