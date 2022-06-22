import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../interfaces/usuario'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private router:Router,) {}

  ngOnInit(): void {

  }
  public login: Usuario[]=[];

  public usuario : Usuario = {
    Correo: "",
    Password: "",
  }

  Acceder(): void {
    this.login.push(this.usuario)
    console.log(this.usuario);
    this.router.navigate(['/cotizacion']);
  }
}
