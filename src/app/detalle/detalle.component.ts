import { Component, OnInit } from '@angular/core';
import { ProductoModel } from '../shared/producto.model';
import { ProductoService } from '../shared/producto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PedidoModel } from '../shared/pedido.model';
import { PedidoService } from '../shared/pedido.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css'],
})
export class DetalleComponent implements OnInit {
  producto = new ProductoModel('', '', '', '', '', '');
  pedido = new PedidoModel('', '', '', '', '', '', '');

  id_producto = '';
  constructor(
    private productoService: ProductoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // Obtener Producto por ID
    this.id_producto = this.route.snapshot.params['idProducto'];
    this.productoService.obtenerProducto(this.id_producto).subscribe(
      (data) => {
        (this.producto = data[0]), (this.pedido.cantidad = '1');
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
