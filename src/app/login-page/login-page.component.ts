import { Component } from '@angular/core';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ FormComponent ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})


export class LoginPageComponent {
  socialButtons: SocialButton[] = [
    {
      id: 1,
      name: "Google"
    },
    {
      id: 2,
      name: "Facebook"
    }
  ];
}

export class SocialButton {
  "id": number;
  "name": string;
}
