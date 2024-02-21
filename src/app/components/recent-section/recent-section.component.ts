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
      title: "IA em evolução",
      img: "/assets/images/robot.jpg",
      description: "Sla sla sla",
      namePerson: "Fabio",
      imgPerson: "https://th.bing.com/th/id/OIP.xo-BCC1ZKFpLL65D93eHcgHaGe?rs=1&pid=ImgDetMain"
    },
    {
      title: "Home Office em alta",
      img: "/assets/images/home-office.jpg",
      description: "Sla sla sla",
      namePerson: "Luick",
      imgPerson: "https://th.bing.com/th/id/OIP.xo-BCC1ZKFpLL65D93eHcgHaGe?rs=1&pid=ImgDetMain"
    },
    {
      title: "Aumento de lucros",
      img: "/assets/images/produtividade.jpg",
      description: "Sla sla sla",
      namePerson: "Luick",
      imgPerson: "https://th.bing.com/th/id/OIP.xo-BCC1ZKFpLL65D93eHcgHaGe?rs=1&pid=ImgDetMain"
    },
    {
      title: "Redes sociais e seus beneficios",
      img: "/assets/images/social-medias.jpg",
      description: "Sla sla sla",
      namePerson: "Luick",
      imgPerson: "https://th.bing.com/th/id/OIP.xo-BCC1ZKFpLL65D93eHcgHaGe?rs=1&pid=ImgDetMain"
    },
    {
      title: "Pets no trabalho",
      img: "/assets/images/animais.jpg",
      description: "Sla sla sla",
      namePerson: "Luick",
      imgPerson: "https://th.bing.com/th/id/OIP.xo-BCC1ZKFpLL65D93eHcgHaGe?rs=1&pid=ImgDetMain"
    },
    {
      title: "Trabalhando em equipe",
      img: "/assets/images/reuniao.jpg",
      description: "Sla sla sla",
      namePerson: "Luick",
      imgPerson: "https://th.bing.com/th/id/OIP.xo-BCC1ZKFpLL65D93eHcgHaGe?rs=1&pid=ImgDetMain"
    }]
  }
}
