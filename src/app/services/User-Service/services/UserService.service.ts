import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
<<<<<<< HEAD
  private readonly backendUrl = 'http://localhost:8045/api/v1';
=======
  private readonly backendUrl = 'http://localhost:8065/api/v1';
>>>>>>> e6f18f61c3d6cd2b5d2c79c823868cccfebe16bb

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.backendUrl}/auth/admin/users`);
  }

  deleteUser(userId: number): Observable<void> {
    return this.http.delete<void>(`${this.backendUrl}/auth/admin/users/${userId}`);
  }

  updateUserRole(userId: number, role: string): Observable<void> {
    return this.http.put<void>(`${this.backendUrl}/auth/admin/users/${userId}/role?roleName=${role}`, {});
  }
}