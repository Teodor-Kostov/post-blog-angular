import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../user.service';
import { FormsModule, NgForm } from '@angular/forms';
import { EmailDirective } from "../../../directives/email.directive";
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule, EmailDirective],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private userService: UserService, private router: Router) {}

  login(form: NgForm){
    if(form.invalid){
      return;
    }

    const data = {
      email: form.value.email,
      password: form.value.password
    };

    this.userService.login(data).subscribe({
      next: (user) => {
        
        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.error('Login failed:', err);
      }
    });
  }

}
