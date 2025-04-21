import { Component, inject } from '@angular/core';
import { User } from '../../models/user/user.model';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {
  user: User = {
    email: '',
    password: '',
  }

  private authService = inject(AuthService);
  private router: Router = inject(Router)

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.authService.login(this.user.email, this.user.password).subscribe({
        next: () => this.router.navigate(['/profile']),
        error: () => alert("Email ou mot de passe incorrect")
      })
    }
  }

}
