import { Injectable } from '@angular/core';
import { Cliente } from '../interfaces/cliente';
import { Vehiculo } from '../interfaces/vehiculo';
import { Cliente_Antiguo } from '../interfaces/cliente_antiguo';
import { Vehiculo_Vendidos } from '../interfaces/vehiculos_vendidos';
import { Concesionario } from '../interfaces/concesionario';

@Injectable({
  providedIn: 'root'
})
export class Servicio01Service {
  ListaCli: Cliente[]= [];
  ListaVehi: Vehiculo[]= [];
  ListaCliente: Cliente_Antiguo[]= [];
  ListaVehiculo: Vehiculo_Vendidos[]= [];
  ListaConcesionario: Concesionario[]= [];
  constructor() {

  }
  GuardarClienteService(cliente: Cliente): void{
    this.ListaCli.push(cliente);
    console.log(this.ListaCli);
    console.log(cliente);
  }
  GuardarVehiculoService(vehiculo: Vehiculo): void{
    this.ListaVehi.push(vehiculo);
    console.log(this.ListaVehi);
    console.log(vehiculo);
  }
  GuardarClienteAntiguoService(clienteAntiguo: Cliente_Antiguo): void{
    this.ListaCliente.push(clienteAntiguo);
    console.log(this.ListaCliente);
    console.log(clienteAntiguo);
  }
  GuardarVehiculoVendidoService(vehiculoVendido: Vehiculo_Vendidos): void{
    this.ListaVehiculo.push(vehiculoVendido);
    console.log(this.ListaVehiculo);
  }
  GuardarConcesionarioService(concesionario: Concesionario): void{
    this.ListaConcesionario.push(concesionario);
    console.log(this.ListaConcesionario);
  }
}
