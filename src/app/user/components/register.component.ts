import { Component } from '@angular/core';
// import { RegisterService } from '../services/register.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RegisterService } from '../services/register.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private registerService: RegisterService) {
    this.form = this.formBuilder.group({
      email: '',
      password: '',
      confirmPassword: ''
    });
  }

  onSubmit(formData: { email: string, password: string }) {
    this.registerService.registerUser(formData.email, formData.password).subscribe();
  }

}
