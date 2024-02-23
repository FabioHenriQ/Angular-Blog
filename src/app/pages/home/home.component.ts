import { Component } from '@angular/core';
import { BigCardComponent } from '../../components/big-card/big-card.component';
import { RecentSectionComponent } from '../../components/recent-section/recent-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BigCardComponent, RecentSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
