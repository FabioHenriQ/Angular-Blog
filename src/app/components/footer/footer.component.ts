import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  links: string[] = ["Produtos", "Geral", "Features", "Soluções", "Tutoriais", "Preços", "Lançamentos", "Companhia", "Sobre nós", "Carreiras", "Novidades", "Contato", "Blog", "Startups", "Ecommerce"];
}
