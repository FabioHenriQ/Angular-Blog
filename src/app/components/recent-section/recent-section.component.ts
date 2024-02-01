import { Component } from '@angular/core';
import { SmallCardComponent } from '../small-card/small-card.component';

@Component({
  selector: 'app-recent-section',
  standalone: true,
  imports: [SmallCardComponent],
  templateUrl: './recent-section.component.html',
  styleUrl: './recent-section.component.css'
})
export class RecentSectionComponent {

}
