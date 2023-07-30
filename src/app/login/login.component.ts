import { Component } from '@angular/core';
import { UsuarioService } from '../shared/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  correo: string = '';
  contrasena: string = '';

  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {}

  onSubmit() {
    this.usuarioService
      .autenticarUsuario(this.correo, this.contrasena)
      .subscribe(
        (response) => {
          if (this.correo == 'administrador@gmail.com') {
            this.router.navigate(['/inicioAdmin']);
          } else {
            this.router.navigate(['/inicioCliente']);
          }
        },
        (error) => {
          this.router.navigate(['/']);
          alert('Error en el inicio de sesión');
          this.router.navigate(['/']);
        }
      );
  }
}
