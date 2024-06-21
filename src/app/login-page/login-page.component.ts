import { Component } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { OrFormComponent } from '../or-form/or-form.component';


@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ FormComponent, OrFormComponent ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})


export class LoginPageComponent {
}