import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  constructor(private activeRoute: ActivatedRoute) {
    this.activeRoute.params.subscribe(
      res => console.log(res)
    )
  }
}
