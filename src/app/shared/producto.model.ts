export class ProductoModel {
  constructor(
    public idProducto: string,
    public nombre: string,
    public detalle: string,
    public cantidad: string,
    public precio: string,
    public imagen: string
  ) {}
}
