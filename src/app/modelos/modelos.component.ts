import { Component } from '@angular/core';
import { Auto } from 'src/app/interfaces/auto';

@Component({
   selector: 'app-modelos',
   templateUrl: './modelos.component.html',
   styleUrls: ['./modelos.component.css']
})

export class ModelosComponent {
 // .................................................... AUTOS ......................................................//
// .................................................... AUTO01 ......................................................//
  public Auto01: Auto = {
    id: 1,
    nombre: "4Runner",
    marca: "Toyota",
    imagen: "https://www.toyotaperu.com.pe/sites/default/files/camioneta-4Runner-Toyota-4x4.png",
    precio: 23100
  };
// .................................................... AUTO02 ......................................................//
  public Auto02: Auto = {
    id: 2,
    nombre: "Avanza",
    marca: "Toyota",
    imagen: "https://www.toyotaperu.com.pe/sites/default/files/avanza-listado_0.png",
    precio: 82680
  };
// .................................................... AUTO03 ......................................................//
  public Auto03: Auto = {
    id: 3,
    nombre: "Hilux",
    marca: "Toyota",
    imagen: "https://www.toyotaperu.com.pe/sites/default/files/HILUX.png",
    precio: 160280
  };
// .................................................... AUTO04 ......................................................//
public Auto04: Auto = {
  id: 4,
  nombre: "Camaro",
  marca: "Toyota",
  imagen: "https://d33cpcpynwss7s.cloudfront.net/wp-content/uploads/2019/11/camaro.png",
  precio: 230900

};
// .................................................... AUTO05 ......................................................//
public Auto05: Auto = {
  id: 5,
  nombre: "Lexus RX",
  marca: "Toyota",
  imagen: "https://cdn.wheel-size.com/automobile/body/lexus-rx-2019-2021-1589785390.1972506.png",
  precio: 123960
};
// .................................................... AUTO06 ......................................................//
public Auto06: Auto = {
  id: 6,
  nombre: "Dodge",
  marca: "Toyota",
  imagen: "https://www.manualesdetodo.net/wp-content/uploads/2020/01/Challenger2018.png.webp",
  precio: 13990
};
public estadoBoton: boolean = false;

onDatos(): void {
  console.log(this.Auto01);
  console.log(this.Auto02);
  console.log(this.Auto03);
  console.log(this.Auto04);
  console.log(this.Auto05);
  console.log(this.Auto06);
}
modelosArray: Auto[] = [this.Auto01,this.Auto02,this.Auto03,this.Auto04,this.Auto05,this.Auto06]
}
