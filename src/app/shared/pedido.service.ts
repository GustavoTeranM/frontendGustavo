import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PedidoModel } from './pedido.model';

@Injectable({
  providedIn: 'root',
})
export class PedidoService {
  BASE_URL = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  obtenerPedidos() {
    return this.http.get<PedidoModel[]>(`${this.BASE_URL}/pedidos`);
  }
  agregarPedido(pedido: PedidoModel) {
    return this.http.post<string>(`${this.BASE_URL}/pedidos`, pedido);
  }
  borrarPedido(idPedido: string) {
    return this.http.delete<string>(`${this.BASE_URL}/pedidos/${idPedido}`);
  }
}
