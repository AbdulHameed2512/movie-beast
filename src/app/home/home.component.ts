import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  trendingMovies : any ;
  theatreMovies: any;
  PopularMovies: any;
  

  constructor( private http : HttpClient, private router : Router) { }

  ngOnInit(): void {
    this.getTrendingMovies();
    this.getTheatreMovies();
    this.getPopularMovies();
  }

  getTrendingMovies(){
    this.http.get('http://localhost:4200/assets/Data/trending-products.json')
    .subscribe((movies)=>{
      this.trendingMovies = movies;
      console.log(this.trendingMovies)

    });
  }
  getTheatreMovies() {
    this.http
      .get('http://localhost:4200/assets/Data/theatre-movies.json')
      .subscribe((movies) => {
        this.theatreMovies = movies;
      });
  }
  getPopularMovies() {
    this.http
      .get('http://localhost:4200/assets/Data/popular-movies.json')
      .subscribe((movies) => {
        this.PopularMovies = movies;
      });
  }
  goToMovie(type:string, id:string){
    this.router.navigate(['movie', type,id]);
  }
}
