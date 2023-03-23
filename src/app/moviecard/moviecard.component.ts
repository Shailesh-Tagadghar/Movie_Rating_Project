import { Component } from '@angular/core';

@Component({
  selector: 'app-moviecard',
  templateUrl: './moviecard.component.html',
  styleUrls: ['./moviecard.component.scss']
})
export class MoviecardComponent {
  Movie_List = [
    {
      id: 1,
      name: "Hera Pheri",
      price: 300.123,
      release_date: "12/05/1999",
      rating: 3.2,
      img: "./assets/Images/HeraPheri.png",
      genere: "Comedy",
      movie_code: "C-1",
      bg_color: true
    },
    {
      id: 2,
      name: "Raja Babu",
      price: 250,
      release_date: "3/06/2001",
      rating: 4.1,
      img: "./assets/Images/RajaBabu.jpg",
      genere: "Comedy",
      movie_code: "C-2",
      bg_color: false
    },
    {
      id: 3,
      name: "Holiday",
      price: 350,
      release_date: "5/08/2004",
      rating: 4.3,
      img: "./assets/Images/Holiday.jpg",
      genere: "Action",
      movie_code: "A-1",
      bg_color: true
    },
    {
      id: 4,
      name: "Raw",
      price: 540,
      release_date: "9/09/2022",
      rating: 2.3,
      img: "./assets/Images/Raw.jpg",
      genere: "Action",
      movie_code: "A-2",
      bg_color: false
    },
    {
      id: 5,
      name: "Annabelle",
      price: 240,
      release_date: "7/17/2003",
      rating: 1.8,
      img: "./assets/Images/Annabelle.jpg",
      genere: "Horror",
      movie_code: "H-1",
      bg_color: true
    },
    {
      id: 6,
      name: "The Nun",
      price: 560,
      release_date: "12/03/2005",
      rating: 4.9,
      img: "./assets/Images/Nun.jpg",
      genere: "Horror",
      movie_code: "H-2",
      bg_color: false
    }
  ]

  card_width = "18"
  font_size = "20px"
  card_border = "2px dotted Blue"
  font_art = {
    "font_family": "Lucida Sans",
    "color": "red"
  }

  filtered_movie = this.Movie_List

  filtermovie(genere: string) {
    if (genere == "Movie_List") {
      this.filtered_movie = this.Movie_List;
    }
    else {
      this.filtered_movie = this.Movie_List.filter(Movie_List => Movie_List.genere == (genere));
    }
  }

  _filtered_movie_name = ""

  get movie_name() {
    return this._filtered_movie_name
  }

  set movie_name(movie: string) {
    this._filtered_movie_name = movie
    console.log(this.movie_name);
    this.filtered_movie = this.Movie_List.filter(Movie_List => Movie_List.name.toLocaleLowerCase().includes(movie.toLocaleLowerCase()))
  }


  from_child(data: string) {
    console.log(data);
  }
}
