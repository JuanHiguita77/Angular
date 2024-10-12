import { Component } from '@angular/core';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent {
  inputMessage = 'Sing your names here!';
  inputValue = '';

  buttonStatus = false;

  inputEvent(event: Event) {
    this.inputValue = (event.target as HTMLInputElement).value;
  }
}
