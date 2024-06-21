import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
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
