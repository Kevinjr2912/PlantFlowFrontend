import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' 
})
export class AuthService {

  getUserId(): number | null {
    const id = localStorage.getItem('id_user');
    return id ? parseInt(id) : null;
  }

  getUserEmail(): string | null {
    const userString = localStorage.getItem('user');
    if (userString) {
      const user = JSON.parse(userString);
      return user.Email || user.email || null;
    }
    return null;
  }
  
  getUserRole(): number  {
    const Id_rol = localStorage.getItem('Id_rol');
    if (Id_rol) {
      return parseInt(Id_rol);
    }
    return 0; 
  }
    

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  logout(): void {
    localStorage.clear();
  }
}
