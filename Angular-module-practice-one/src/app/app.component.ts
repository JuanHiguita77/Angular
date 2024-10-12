import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderModule } from './header/header.module';
import { BannerComponent } from "./banner/banner.component";
import { IconsSectionComponent } from "./icons-section/icons-section.component";
import { ProductsSectionModule } from './products-section/products-section.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderModule, BannerComponent, IconsSectionComponent, ProductsSectionModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular-module-practice-one';
}
