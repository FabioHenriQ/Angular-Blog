import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BigCardComponent } from './components/big-card/big-card.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { RecentSectionComponent } from './components/recent-section/recent-section.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BigCardComponent, MenuBarComponent, RecentSectionComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
