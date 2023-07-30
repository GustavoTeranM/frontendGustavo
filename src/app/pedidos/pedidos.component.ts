import { Component, OnInit } from '@angular/core';
import { PedidoModel } from '../shared/pedido.model';
import { PedidoService } from '../shared/pedido.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css'],
})
export class PedidosComponent implements OnInit {
  pedidos: Observable<PedidoModel[]> | undefined;

  constructor(private pedidoService: PedidoService) {}

  ngOnInit() {
    this.pedidos = this.pedidoService.obtenerPedidos();
  }

  borrarPedido(idPedido: string) {
    this.pedidoService.borrarPedido(idPedido).subscribe((data) => {
      console.log('Registro Eliminado');
      this.ngOnInit();
    });
  }
}
