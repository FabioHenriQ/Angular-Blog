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

  recents = {
    news: [{
      id: 0,
      title: "noticia 1",
      img: "https://th.bing.com/th/id/OIP.48USig7crJ7H-Lui59isuAHaEo?rs=1&pid=ImgDetMain",
      description: "Sla sla sla",
      namePerson: "Fabio",
      imgPerson: "https://th.bing.com/th/id/OIP.xo-BCC1ZKFpLL65D93eHcgHaGe?rs=1&pid=ImgDetMain"
    },
    {
      id: 1,
      title: "noticia 2",
      img: "https://th.bing.com/th/id/OIP.48USig7crJ7H-Lui59isuAHaEo?rs=1&pid=ImgDetMain",
      description: "Sla sla sla",
      namePerson: "Luick",
      imgPerson: "https://th.bing.com/th/id/OIP.xo-BCC1ZKFpLL65D93eHcgHaGe?rs=1&pid=ImgDetMain"
    }]
  }
}
