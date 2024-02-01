import { Component } from '@angular/core';
import { BigCardComponent } from '../../components/big-card/big-card.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';
import { RecentSectionComponent } from '../../components/recent-section/recent-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BigCardComponent, MenuBarComponent, RecentSectionComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
