import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/User-Service/services/UserService.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  users: any[] = [];
  roles: string[] = ['USER', 'ADMIN', 'AGENT']; // Available roles

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.userService.getAllUsers().subscribe({
      next: (response) => {
        this.users = response.map((user: any) => ({
          ...user,
          selectedRole: user.roles[0]?.name || 'USER' // Default to 'USER' if no role
        }));
      },
      error: (err) => {
        console.error('Error fetching users:', err);
      }
    });
  }

  deleteUser(userId: number): void {
    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteUser(userId).subscribe({
        next: () => {
          alert('User deleted successfully.');
          this.fetchUsers(); // Refresh the user list
        },
        error: (err) => {
          console.error(' deleting user:', err);
          alert(' deleted user!');
        }
      });
    }
  }

  updateUserRole(user: any): void {
    const updatedRole = user.selectedRole;
    this.userService.updateUserRole(user.id, updatedRole).subscribe({
      next: () => {
        alert(`User role updated to ${updatedRole}.`);
        // Update the user's role in the UI
        user.roles = [{ name: updatedRole }];
        this.fetchUsers(); // Refresh the user list
      },
      error: (err) => {
        console.error(' updating user role:', err);
        alert(' update user agent.');
      }
    });
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('authToken'); // Check if the token exists
  }
  
  logout(): void {
    localStorage.removeItem('authToken'); // Remove the token
    this.router.navigate(['/login']); // Redirect to the login page
  }
}