import { Component } from '@angular/core';
import { Accesorio } from 'src/app/interfaces/accesorio';

@Component({
  selector: 'app-registro-accesorio',
  templateUrl: './registro-accesorio.component.html',
  styleUrls: ['./registro-accesorio.component.css']
})
export class RegistroAccesorioComponent {
// .................................................... AccesorioS ......................................................//
// .................................................... Accesorio01 ......................................................//
public Accesorio01: Accesorio = {
  id: 1,
  nombre: "Reproductor",
  marca: "Toyota",
  precio: 100,
  imagen: "adferomfroe"
};
// .................................................... Accesorio02 ......................................................//
public Accesorio02: Accesorio = {
  id: 2,
  nombre: "Cable de Carga",
  marca: "Toyota",
  precio: 380,
  imagen: "adferomfroe"
};
// .................................................... Accesorio03 ......................................................//
public Accesorio03: Accesorio = {
  id: 3,
  nombre: "Luz Advertencia",
  marca: "Toyota",
  precio: 228,
  imagen: "adferomfroe"
};

accesorioArray: Accesorio[] = [this.Accesorio01,this.Accesorio02,this.Accesorio03];
  public Accesorio:Accesorio=this.accesorioVacio();
  public posicion: number = -1

  Agregar(): void {
    if(this.posicion == -1){
    this.Accesorio.id = this.accesorioArray.length + 1;
    this.accesorioArray.push(this.Accesorio);
    this.Accesorio= this.accesorioVacio();
    console.log("el arreglo de Accesorios tiene:",this.accesorioArray.length,"elementos")
    console.table(this.accesorioArray)
    }
    else{
      let selectAccesorio: Accesorio =  this.accesorioArray[this.posicion];
      selectAccesorio.id = this.Accesorio.id;
      selectAccesorio.nombre = this.Accesorio.nombre;
      selectAccesorio.marca = this.Accesorio.marca;
      selectAccesorio.precio = this.Accesorio.precio;
      this.Accesorio = this.accesorioVacio();
      this.posicion = -1;
      console.table(this.accesorioArray)
    }
}
accesorioVacio(): Accesorio{
  return{
    id: 0,
    nombre:"",
    marca:"",
    precio: 0,
    imagen:""
  };
}
   eliminar(i: number):void{
    this.accesorioArray.splice(i,1);
    console.table(this.accesorioArray)
   }

   editar(i: number):void{
    let selectAccesorio: Accesorio =  this.accesorioArray[i];
    this.Accesorio.id = selectAccesorio.id;
    this.Accesorio.nombre = selectAccesorio.nombre;
    this.Accesorio.marca = selectAccesorio.marca;
    this.Accesorio.precio = selectAccesorio.precio;
    this.posicion = i;
    console.table(this.accesorioArray)
  };

}
