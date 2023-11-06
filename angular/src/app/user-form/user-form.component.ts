// import { Component } from '@angular/core';
import { Component, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Injectable()
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent {
  form: FormGroup;
  submitted = false;
  formData: any;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z ]+$'),
          Validators.minLength(3),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      age: ['', [Validators.required, Validators.min(18), Validators.max(100)]],
      country: ['', Validators.required],
      acceptance: [false, Validators.requiredTrue],
    });
  }

  submitForm() {
    console.log(this.form);
    if (this.form.valid) {
      this.submitted = true;
      this.formData = this.form.value;
      alert('Form submitted successfully!');
    }
  }
}
