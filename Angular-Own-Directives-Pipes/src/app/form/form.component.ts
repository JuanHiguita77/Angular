import { Component } from '@angular/core';
import { OnlyTextDirective } from '../directives/only-text.directive';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [OnlyTextDirective, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  text = ''
}
