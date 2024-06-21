import { Component } from '@angular/core';

@Component({
  selector: 'app-or-form',
  standalone: true,
  imports: [],
  templateUrl: './or-form.component.html',
  styleUrl: './or-form.component.css'
})
export class OrFormComponent {
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

