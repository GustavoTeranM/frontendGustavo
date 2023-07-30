import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { PieComponent } from './pie/pie.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { InicioClienteComponent } from './inicio-cliente/inicio-cliente.component';
import { InicioAdministradorComponent } from './inicio-administrador/inicio-administrador.component';
import { UsuarioService } from './shared/usuario.service';
import { ProductoService } from './shared/producto.service';
import { DetalleComponent } from './detalle/detalle.component';
import { FormularioCompraComponent } from './formulario-compra/formulario-compra.component';
import { PedidoService } from './shared/pedido.service';
import { EditarProductosComponent } from './editar-productos/editar-productos.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { EncabezadoAdministradorComponent } from './encabezado-administrador/encabezado-administrador.component';
import { PieAdministradorComponent } from './pie-administrador/pie-administrador.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    PieComponent,
    LoginComponent,
    RegistroComponent,
    InicioClienteComponent,
    InicioAdministradorComponent,
    DetalleComponent,
    FormularioCompraComponent,
    EditarProductosComponent,
    PedidosComponent,
    EncabezadoAdministradorComponent,
    PieAdministradorComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [UsuarioService, ProductoService, PedidoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
