import { Component, OnInit } from '@angular/core';
import { Cliente } from '../interfaces/cliente';
import { Vehiculo } from '../interfaces/vehiculo';
import { Servicio01Service } from '../Servicios/servicio01.service';

@Component({
  selector: 'app-cotizacion',
  templateUrl: './cotizacion.component.html',
  styleUrls: ['./cotizacion.component.css']
})
export class CotizacionComponent  {
  constructor(private miservicio01:Servicio01Service){
     this.ListaCli=this.miservicio01.ListaCli;
     this.ListaVehi=this.miservicio01.ListaVehi;
  }
  public ListaCli: Cliente[]= [];
  public ListaVehi: Vehiculo[]= [];

   public cliente: Cliente = {
     Dni: "",
     Nombre: "",
     Apellido: "",
     Email: "",
     Telefono: "",
     Departamento: ""
   }
   public vehiculo: Vehiculo = {
     Marca: "",
     Estado: "",
     Modelo: "",
     Version: "",
   }

  GuardarDatos(): void {
    this.miservicio01.GuardarClienteService(this.cliente);
    this.miservicio01.GuardarVehiculoService(this.vehiculo);

    // this.ListaCli.push(this.cliente)
    // this.ListaVehi.push(this.vehiculo)
    // console.log(this.cliente);
    // console.log(this.ListaCli);
    // console.log(this.vehiculo);
    // console.log(this.ListaVehi);
  }
}
