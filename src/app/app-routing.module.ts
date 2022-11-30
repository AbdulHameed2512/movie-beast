import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MovieComponent } from './movie/movie.component';

const routes: Routes = [
  {path : "", redirectTo :"Login" , pathMatch : 'full'},
  {path : "Home", component : HomeComponent},
  {path : "login", component : LoginComponent},
  {path : "movie/:type/:id", component : MovieComponent},
  {path : "**" , component : LoginComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
