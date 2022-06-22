import { Component, OnInit } from '@angular/core';
import { Cliente_Antiguo } from '../interfaces/cliente_antiguo';
import { Vehiculo_Vendidos } from '../interfaces/vehiculos_vendidos';
import { Concesionario } from '../interfaces/concesionario';
import { Servicio01Service } from '../Servicios/servicio01.service';

@Component({
  selector: 'app-post-venta',
  templateUrl: './post-venta.component.html',
  styleUrls: ['./post-venta.component.css']
})
export class PostVentaComponent {
  constructor(private miservicio01:Servicio01Service){
    this.ListaCliente=this.miservicio01.ListaCliente;
    this.ListaVehiculo=this.miservicio01.ListaVehiculo;
    this.ListaConcesionario=this.miservicio01.ListaConcesionario;
  }
  public ListaCliente: Cliente_Antiguo[]= [];
  public ListaVehiculo: Vehiculo_Vendidos[]= [];
  public ListaConcesionario: Concesionario[]= [];

  public clienteAntiguo: Cliente_Antiguo = {
    Nombre: "",
    Apellido: "",
    Email: "",
    Telefono: "",
  }
  public vehiculoVendido: Vehiculo_Vendidos = {
    Placa: "",
    Modelo: "",
  }
  public concesionario: Concesionario = {
    Sede: "",
    Servicio: "",
  }
  EnviarDatos(): void {
    this.miservicio01.GuardarClienteAntiguoService(this.clienteAntiguo);
    this.miservicio01.GuardarVehiculoVendidoService(this.vehiculoVendido);
    this.miservicio01.GuardarConcesionarioService(this.concesionario);
    // this.ListaCliente.push(this.clienteAntiguo)
    // this.ListaVehiculo.push(this.vehiculoVendido)
    // this.ListaConcesionario.push(this.concesionario)
    // console.log(this.clienteAntiguo)
    // console.log(this.vehiculoVendido)
    // console.log(this.concesionario)
  }
}
