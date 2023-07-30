import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoModel } from 'src/app/shared/producto.model';
import { ProductoService } from 'src/app/shared/producto.service';

@Component({
  selector: 'app-editar-productos',
  templateUrl: './editar-productos.component.html',
  styleUrls: ['./editar-productos.component.css'],
})
export class EditarProductosComponent implements OnInit {
  idProducto = '';
  producto = new ProductoModel('', '', '', '', '', '');

  constructor(
    private productoService: ProductoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.idProducto = this.route.snapshot.params['idProducto'];

    if (this.idProducto) {
      this.productoService.obtenerProducto(this.idProducto).subscribe(
        (data) => {
          this.producto = data[0];
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      console.log('Nuevo Producto');
    }
  }

  onSubmit() {
    if (this.producto.idProducto) {
      this.productoService
        .actualizarProducto(this.producto)
        .subscribe((data) => {
          console.log(data);
          alert('Actualización exitosa!');
          this.router.navigate(['/inicioAdmin']);
        });
    } else {
      this.productoService.agregarProducto(this.producto).subscribe((data) => {
        alert('Registro exitoso!');
        this.router.navigate(['/inicioAdmin']);
      });
    }
  }
}
