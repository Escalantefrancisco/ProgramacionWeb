import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-main-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './main-header.html',
  styleUrl: './main-header.css',
})
export class MainHeader {}
