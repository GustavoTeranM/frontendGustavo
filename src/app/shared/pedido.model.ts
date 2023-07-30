export class PedidoModel {
  constructor(
    public idPedido: string,
    public cliente: string,
    public correo: string,
    public direccion: string,
    public producto: string,
    public cantidad: string,
    public precio: string
  ) {}
}
