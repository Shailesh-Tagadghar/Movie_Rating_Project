import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MoviecardComponent } from './moviecard/moviecard.component';
import { FormsModule } from '@angular/forms';
import { CustompipePipe } from './custompipe.pipe';
import { RatingComponent } from './rating/rating.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MoviecardComponent,
    CustompipePipe,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
