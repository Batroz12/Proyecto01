import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Administrador} from '../interfaces/administrador'

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  public loginAdmin: Administrador[]=[];
  public administrador : Administrador = {
    Correo: "",
    Password: "",
  }

  Acceder(): void {
    this.loginAdmin.push(this.administrador)
    console.log(this.administrador);
    this.router.navigate(['/modelos']);
  }
}
