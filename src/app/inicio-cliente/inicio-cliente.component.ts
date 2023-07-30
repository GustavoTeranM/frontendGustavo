import { Component, OnInit } from '@angular/core';
import { ProductoModel } from '../shared/producto.model';
import { Observable } from 'rxjs';
import { ProductoService } from '../shared/producto.service';

@Component({
  selector: 'app-inicio-cliente',
  templateUrl: './inicio-cliente.component.html',
  styleUrls: ['./inicio-cliente.component.css'],
})
export class InicioClienteComponent implements OnInit {
  productos: Observable<ProductoModel[]> | undefined;
  categoriaSeleccionada: string | null = null;

  constructor(private productoService: ProductoService) {}

  ngOnInit() {
    this.productos = this.productoService.obtenerProductos();
  }
}
