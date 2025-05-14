import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private authService = inject(AuthService);
  private route: Router = inject(Router);

  isAdmin(): boolean {
    return (
      this.authService
        .getUserRoles()
        ?.some((role: any) => role.authority === 'ROLE_ADMIN') ?? false
    );
  }

  isUser(): boolean {
    return (
      this.authService
        .getUserRoles()
        ?.some((role: any) => role.authority === 'ROLE_USER') ?? false
    );
  }
  logout(): void {
    this.authService.clearToken();
    this.navigateToLoginPage();
  }
  navigateToSignUpPage(): void {
    this.route.navigate(['/signup']);
  }
  navigateToLoginPage(): void {
    this.route.navigate(['/login']);
  }
}
