import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { InicioClienteComponent } from './inicio-cliente/inicio-cliente.component';
import { InicioAdministradorComponent } from './inicio-administrador/inicio-administrador.component';
import { DetalleComponent } from './detalle/detalle.component';
import { FormularioCompraComponent } from './formulario-compra/formulario-compra.component';
import { EditarProductosComponent } from './editar-productos/editar-productos.component';
import { PedidoModel } from './shared/pedido.model';
import { PedidosComponent } from './pedidos/pedidos.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'registro',
    component: RegistroComponent,
  },
  {
    path: 'inicioCliente',
    component: InicioClienteComponent,
  },
  {
    path: 'inicioAdmin',
    component: InicioAdministradorComponent,
  },
  {
    path: 'detalle/:idProducto',
    component: DetalleComponent,
  },
  {
    path: 'compras/:idProducto',
    component: FormularioCompraComponent,
  },
  { path: 'productos/agregar', component: EditarProductosComponent },
  { path: 'productos/editar/:idProducto', component: EditarProductosComponent },
  { path: 'pedidos', component: PedidosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
