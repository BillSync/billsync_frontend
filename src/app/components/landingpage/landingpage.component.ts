import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCard } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-home',
  imports: [RouterLink, MatCard],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css',
})
export class LandingPageComponent {}
