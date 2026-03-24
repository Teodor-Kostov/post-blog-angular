import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '../user.service';
import { FormsModule, NgForm } from '@angular/forms';
import { EmailDirective } from '../../../directives/email.directive';
import { MatchPasswordsDirective } from '../../../directives/match-passwords.directive';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, FormsModule, EmailDirective, MatchPasswordsDirective],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent  {
  constructor(private userService: UserService){

  }

  register(form: NgForm){
    if(form.invalid){
      return
    }
    console.log(form.value);
    

  }

}
