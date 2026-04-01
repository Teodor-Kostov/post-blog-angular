import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../user.service';
import { FormsModule, NgForm } from '@angular/forms';
import { EmailDirective } from '../../../directives/email.directive';
import { MatchPasswordsDirective } from '../../../directives/match-passwords.directive';
import { RegisterRequest } from '../../types';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, FormsModule, EmailDirective, MatchPasswordsDirective],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent  {

  
  constructor(private userService: UserService, private router: Router){

  }

  register(form: NgForm){
    
    if(form.invalid){
      return
    }
     const formValue = form.value;

    const data = {
      email: formValue.email,
      username: formValue.username,
      password: formValue.passwords.password,
      repeatPassword: formValue.passwords.repeatPassword,
      tel: formValue.tel  
    };

    this.userService.register(data).subscribe({
      next: (user) => {
        
        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.error('Register failed:', err);
      }
    })

  }

}
