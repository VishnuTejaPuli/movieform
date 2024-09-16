import { Component } from '@angular/core';
import { Movie } from 'movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {

  powers = ['Tom Cruise', 'Leonardo DiCaprio',
    'Brad Pitt', 'Ryan Gosling'];

model = new Movie(18, 'Top Gun Maverick', this.powers[0], 'Action Drama');

submitted = false;

onSubmit() { this.submitted = true; }

newMovie() {
this.model = new Movie(42, '', '');
}


}
