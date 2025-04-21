import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/User-Service/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  authRequest = {
    email: '', 
    password: '' 
  };

  errorMsg: string[] = [];

  constructor(private authService: AuthenticationService, private router: Router) {}

  login(): void {
    this.errorMsg = [];
    const params = { body: this.authRequest };
    this.authService.authenticate(params).subscribe({
      next: (response) => {
        if (response.token) {
          localStorage.setItem('authToken', response.token);
  
          // Fetch user details to determine role
          this.authService.getCurrentUser().subscribe({
            next: (user) => {
              console.log('User details:', user); // Log user details for debugging
              localStorage.setItem('currentUser', JSON.stringify(user));
              const roles = user.roles.map((role: any) => role.name); // Assuming roles are returned as an array of objects
              console.log('User roles:', roles); // Log roles for debugging
              if (roles.includes('ADMIN')) {
                this.router.navigate(['/admin/dashboard']);
              } else {
                this.router.navigate(['/dashboard']);
              }
            },
            error: (err) => {
              console.error('Error fetching user details:', err); // Log the error
              this.errorMsg.push('Failed to fetch user details.');
            },
          });
        } else {
          this.errorMsg.push('Authentication failed. No token received.');
        }
      },
      error: (err) => {
        console.error('Error during authentication:', err); // Log the error
        this.errorMsg.push('Invalid email or password.');
      },
    });
  }
}
