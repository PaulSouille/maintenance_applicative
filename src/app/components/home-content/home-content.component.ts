import { Component, OnInit, NgModule } from '@angular/core';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { MatButtonModule } from '@angular/material';
import { MatCardModule, MatCard } from '@angular/material/card';


@Component({
  selector: 'home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})

export class HomeContentComponent implements OnInit {
  faLink = faLink;

  constructor() { }

  ngOnInit() {
  }

}
