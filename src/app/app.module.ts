import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { CotizacionComponent } from './cotizacion/cotizacion.component';
import { ModelosComponent } from './modelos/modelos.component';
import { PostVentaComponent } from './post-venta/post-venta.component';
import { MenuComponent } from './menu/menu.component';
import { AccesoriosComponent } from './accesorios/accesorios.component';
import { RepuestosComponent } from './repuestos/repuestos.component';
import { Servicio01Service } from './Servicios/servicio01.service';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { RegistroAccesorioComponent } from './registro-accesorio/registro-accesorio.component';
import { RegistroAutoComponent } from './registro-auto/registro-auto.component';
import { RegistroRepuestoComponent } from './registro-repuesto/registro-repuesto.component';
import { RegistroComponent } from './registro/registro.component';
import { ApiCService } from './Servicios/api-c.service';
// import { ProductosComponent } from './productos/productos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CotizacionComponent,
    ModelosComponent,
    PostVentaComponent,
    MenuComponent,
    AccesoriosComponent,
    RepuestosComponent,
    LoginAdminComponent,
    RegistroAccesorioComponent,
    RegistroAutoComponent,
    RegistroRepuestoComponent,
    RegistroComponent,

    // ProductosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports: [
    AppComponent,
    LoginComponent,
    CotizacionComponent
  ],
  providers: [
    Servicio01Service,
    ApiCService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
