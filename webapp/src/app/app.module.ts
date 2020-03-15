import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ErrorComponent } from './components/pages/error/error.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipeComponent } from './components/entities/recipe/recipe.component';
import { RecipeCarouselImageComponent } from './components/entities/recipe-carousel-image/recipe-carousel-image.component';
import { RecipeCarouselComponent } from './components/entities/recipe-carousel/recipe-carousel.component';
import { RecipeCardComponent } from './components/entities/recipe-card/recipe-card.component';
import { SearchComponent } from './components/entities/search/search.component';
import { BaseComponent } from './components/base-components/base-component/base-component.component';
import { BadgeComponent } from './components/entities/badge/badge.component';
import { OutsideClickDirective } from './directives/outside-click.directive';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    AboutComponent,
    RecipeComponent,
    RecipeCarouselImageComponent,
    RecipeCarouselComponent,
    RecipeCardComponent,
    SearchComponent,
    BaseComponent,
    BadgeComponent,
    OutsideClickDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [
    // Provides base_url from environment as service - @Inject returns string by key 'BASE_URL'
    { provide: 'BASE_URL', useValue: environment.restApiUrl },
  ],
  bootstrap: [AppComponent],
  entryComponents: [RecipeComponent]
})
export class AppModule {
}
