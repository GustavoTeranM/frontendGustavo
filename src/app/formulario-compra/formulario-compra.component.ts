import { Component, OnInit } from '@angular/core';
import { PedidoModel } from '../shared/pedido.model';
import { PedidoService } from '../shared/pedido.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from '../shared/producto.service';
import { ProductoModel } from '../shared/producto.model';

@Component({
  selector: 'app-formulario-compra',
  templateUrl: './formulario-compra.component.html',
  styleUrls: ['./formulario-compra.component.css'],
})
export class FormularioCompraComponent implements OnInit {
  pedido = new PedidoModel('', '', '', '', '', '', '');
  producto = new ProductoModel('', '', '', '', '', '');
  id_producto = '';
  constructor(
    private productoService: ProductoService,
    private pedidoService: PedidoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // Obtener Producto por ID
    this.id_producto = this.route.snapshot.params['idProducto'];
    this.productoService.obtenerProducto(this.id_producto).subscribe(
      (data) => {
        (this.producto = data[0]),
          (this.pedido.producto = this.producto.nombre),
          (this.pedido.cantidad = '1'),
          (this.pedido.precio = this.producto.precio);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  comprar() {
    this.pedidoService.agregarPedido(this.pedido).subscribe((data) => {
      alert('Compra exitosa!');
      this.router.navigate(['/inicioCliente']);
    });
  }
}
