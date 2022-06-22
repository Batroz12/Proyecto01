import { Component, OnInit } from '@angular/core';
import { Repuesto } from 'src/app/interfaces/repuesto';

@Component({
  selector: 'app-registro-repuesto',
  templateUrl: './registro-repuesto.component.html',
  styleUrls: ['./registro-repuesto.component.css']
})
export class RegistroRepuestoComponent {

// .................................................... repuestoS ......................................................//
// .................................................... repuesto01 ......................................................//
public Repuesto01: Repuesto = {
  id: 1,
  nombre: "Llantas",
  marca: "Toyota",
  precio: 100,
  imagen: "adferomfroe"
};
// .................................................... repuesto02 ......................................................//
public Repuesto02: Repuesto = {
  id: 2,
  nombre: "Parabrisa",
  marca: "Kia",
  precio: 680,
  imagen: "adferomfroe"
};
// .................................................... repuesto03 ......................................................//
public Repuesto03: Repuesto = {
  id: 3,
  nombre: "Frenos",
  marca: "Rayo",
  precio: 128,
  imagen: "adferomfroe"
};

  repuestoArray: Repuesto[] = [this.Repuesto01,this.Repuesto02,this.Repuesto03];
  public repuesto:Repuesto=this.repuestoVacio();
  public posicion: number = -1

  Agregar(): void {
    if(this.posicion == -1){
    this.repuesto.id = this.repuestoArray.length + 1;
    this.repuestoArray.push(this.repuesto);
    this.repuesto= this.repuestoVacio();
    console.log("el arreglo de repuestos tiene:",this.repuestoArray.length,"elementos")
    console.table(this.repuestoArray)
    }
    else{
      let selectrepuesto: Repuesto =  this.repuestoArray[this.posicion];
      selectrepuesto.id = this.repuesto.id;
      selectrepuesto.nombre = this.repuesto.nombre;
      selectrepuesto.marca = this.repuesto.marca;
      selectrepuesto.precio = this.repuesto.precio;
      this.repuesto = this.repuestoVacio();
      this.posicion = -1;
      console.table(this.repuestoArray)
    }
}
  repuestoVacio(): Repuesto{
  return{
    id: 0,
    nombre:"",
    marca:"",
    precio: 0,
    imagen:""
  };
}
   eliminar(i: number):void{
    this.repuestoArray.splice(i,1);
    console.table(this.repuestoArray)
   }

   editar(i: number):void{
    let selectrepuesto: Repuesto =  this.repuestoArray[i];
    this.repuesto.id = selectrepuesto.id;
    this.repuesto.nombre = selectrepuesto.nombre;
    this.repuesto.marca = selectrepuesto.marca;
    this.repuesto.precio = selectrepuesto.precio;
    this.posicion = i;
    console.table(this.repuestoArray)
  };

}
