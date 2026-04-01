import { Injectable } from '@angular/core';
import { type User, LoginRequest, RegisterRequest, EditProfileRequest } from '../types';
import { Observable, tap } from 'rxjs';
import { ApiService } from '../api.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  USER_KEY = '[user]';
  user: User | null = null;

  get isLogged(): boolean {
    return !!this.user
  }

  constructor(private apiService: ApiService) {}


  register(data: RegisterRequest): Observable<User>{
    return this.apiService.userApi.register(data).pipe(
      tap((user)=>{
        this.user = user;
         localStorage.setItem(this.USER_KEY, JSON.stringify(user));
      })
    )
  }

  login(data: LoginRequest): Observable<User> {
    return this.apiService.userApi.login(data).pipe(
      tap((user) => {
        this.user = user;
        localStorage.setItem(this.USER_KEY, JSON.stringify(user));
      })
    );
  }

  logout(): void {
    this.user = null;
    localStorage.removeItem(this.USER_KEY);
  }
  updateProfile(data: EditProfileRequest): Observable<User> {
    return this.apiService.userApi.updateProfile(data).pipe(
      tap((user) => {
        this.user = user;
        localStorage.setItem(this.USER_KEY, JSON.stringify(user));
      })
    );
  }
}
