import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'confyeti-web-app';

  form;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      email: '',
      password: '',
      confirmPassword: ''
    });
  }

  onSubmit(formData: any) {
    console.log(formData);
  }
}
