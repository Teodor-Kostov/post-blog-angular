import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { EditProfileRequest, User } from '../../types';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { emailvalidator } from '../../utils/email.validator';

@Component({
  selector: 'app-profile',
  imports: [ ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  form = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(5)]),
    email: new FormControl('', [Validators.required, emailvalidator]),
    tel: new FormControl('')
  });

  constructor(private userService: UserService) {}

  isEditMode = false;

  onEdit(): void {
    this.isEditMode = true;
    this.form.patchValue({
      username: this.userData?.username || '',
      email: this.userData?.email || '',
      tel: this.userData?.tel || ''
    });
  }

  onSave(): void {
    if (this.form.invalid) {
      console.error('Form is invalid');
      return;
    }

    const { username, email, tel } = this.form.value;

    if (!username || !email) {
      console.error('Username and email are required');
      return;
    }

    const data: EditProfileRequest = { username, email, tel };

    this.userService.updateProfile(data).subscribe({
      next: () => {
        this.isEditMode = false;
      },
      error: (err) => {
        console.error('Failed to update profile:', err);
      }
    });
  }

  onCancel(): void {
    this.form.reset();
    this.isEditMode = false;
  }

  get userData(): User | null {
    return this.userService.user;
  }
}
