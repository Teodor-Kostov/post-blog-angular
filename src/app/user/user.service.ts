import { Injectable } from '@angular/core';
import { UserForAuth } from '../types';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  USER_KEY = '[user]';
  user: UserForAuth | null = null;
  
  get isLogged(): boolean {
    return !!this.user
  }

  
  constructor() { 
    try {
      const lsUser = localStorage.getItem(this.USER_KEY) || '';
      this.user = JSON.parse(lsUser)
      
    } catch (error) {
      this.user = null;
      
    }
  }

    login(){
      this.user = {
        id: '123456781234567',
        firstName: 'Max',
        secondName: 'Mustermann',
        phone: '099998888777666',
        email: 'max.mustermann@internet.com',
        password: '123456'
      }
      localStorage.setItem(this.USER_KEY, JSON.stringify(this.user))

      }


      logout(){
        this.user = null;
        localStorage.removeItem(this.USER_KEY)
      }
}
      