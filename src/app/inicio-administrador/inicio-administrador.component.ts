import { Component, OnInit } from '@angular/core';
import { ProductoModel } from '../shared/producto.model';
import { Observable } from 'rxjs';
import { ProductoService } from '../shared/producto.service';

@Component({
  selector: 'app-inicio-administrador',
  templateUrl: './inicio-administrador.component.html',
  styleUrls: ['./inicio-administrador.component.css'],
})
export class InicioAdministradorComponent implements OnInit {
  productos: Observable<ProductoModel[]> | undefined;

  constructor(private productoService: ProductoService) {}

  ngOnInit() {
    this.productos = this.productoService.obtenerProductos();
  }

  borrarProducto(idProducto: string) {
    this.productoService.borrarProducto(idProducto).subscribe((data) => {
      alert('Pedido eliminado');
      this.ngOnInit();
    });
  }
}
