import { Component, OnInit } from '@angular/core';
import { registro } from 'src/app/interfaces/registro';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public registro: registro = this.registrovacio();

  public registros: registro [] =[];

  ondatos():void{
    console.log(this.registro);
    this.registros.push(this.registro);
    this.registro = this.registrovacio();
    console.log("el arreglo tiene", this.registros.length ,"elementos");

  }
  registrovacio(): registro{
    return{
  nombre : "",
  apellido:"",
  contrasenia:"",
  correo:""

    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
