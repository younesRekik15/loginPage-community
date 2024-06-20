import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})


export class LoginPageComponent {
  inputs: Input[] = [
    {
      id: 1,
      name: "Email",
      type: "email",
      placeholder: "Example@email.com"
    },
    {
      id: 2,
      name: "Password",
      type: "password",
      placeholder: "At least 8 characters"
    }
  ];
}

export class Input {
  "id": number;
  "name": string;
  "type": string;
  "placeholder": string;
}

