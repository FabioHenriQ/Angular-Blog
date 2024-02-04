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
      title: "noticia 1",
      img: "/assets/images/robot.jpg",
      description: "Sla sla sla",
      namePerson: "Fabio",
      imgPerson: "https://th.bing.com/th/id/OIP.xo-BCC1ZKFpLL65D93eHcgHaGe?rs=1&pid=ImgDetMain"
    },
    {
      title: "noticia 2",
      img: "/assets/images/home-office.jpg",
      description: "Sla sla sla",
      namePerson: "Luick",
      imgPerson: "https://th.bing.com/th/id/OIP.xo-BCC1ZKFpLL65D93eHcgHaGe?rs=1&pid=ImgDetMain"
    },
    {
      title: "noticia 3",
      img: "/assets/images/programming.jpg",
      description: "Sla sla sla",
      namePerson: "Luick",
      imgPerson: "https://th.bing.com/th/id/OIP.xo-BCC1ZKFpLL65D93eHcgHaGe?rs=1&pid=ImgDetMain"
    },
    {
      title: "noticia 4",
      img: "/assets/images/social-medias.jpg",
      description: "Sla sla sla",
      namePerson: "Luick",
      imgPerson: "https://th.bing.com/th/id/OIP.xo-BCC1ZKFpLL65D93eHcgHaGe?rs=1&pid=ImgDetMain"
    }]
  }
}
