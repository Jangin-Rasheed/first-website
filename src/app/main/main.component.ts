import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  public navigateTo(navigationPath: any): void {
    this.router.navigate([navigationPath]);
  }

}
