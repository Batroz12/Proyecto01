import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { CotizacionComponent } from './cotizacion/cotizacion.component';
import { LoginComponent } from './login/login.component';
import { ModelosComponent } from './modelos/modelos.component';
import { PostVentaComponent } from './post-venta/post-venta.component';
import { MenuComponent } from './menu/menu.component';
import { AccesoriosComponent } from './accesorios/accesorios.component';
import { RepuestosComponent } from './repuestos/repuestos.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { RegistroAccesorioComponent } from './registro-accesorio/registro-accesorio.component';
import { RegistroAutoComponent } from './registro-auto/registro-auto.component';
import { RegistroRepuestoComponent } from './registro-repuesto/registro-repuesto.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes =[
  {path:'', component: MenuComponent},
  {path:'menu', component: MenuComponent},
  {path:'login', component: LoginComponent},
  {path:'cotizacion', component: CotizacionComponent},
  {path:'modelos', component: ModelosComponent},
  {path:'accesorios', component: AccesoriosComponent},
  {path:'repuestos', component: RepuestosComponent},
  {path:'postventa', component: PostVentaComponent},
  {path:'login-admin', component: LoginAdminComponent},
  {path:'registro-accesorio', component: RegistroAccesorioComponent},
  {path:'registro-auto', component: RegistroAutoComponent},
  {path:'registro-repuesto', component: RegistroRepuestoComponent},
  {path:'registro', component: RegistroComponent},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
