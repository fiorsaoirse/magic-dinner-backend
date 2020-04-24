import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
import { RecipeCardsItemComponent } from './components/entities/recipe-cards-item/recipe-cards-item.component';
import { SearchComponent } from './components/entities/search/search.component';
import { BaseComponent } from './components/base-components/base-component/base-component.component';
import { BadgeComponent } from './components/entities/badge/badge.component';
import { OutsideClickDirective } from './directives/outside-click/outside-click.directive';
import { environment } from '../environments/environment';
import { ScrollToTopDirective } from './directives/scroll-to-top/scroll-to-top.directive';
import { NgxLoadingModule } from 'ngx-loading';
import { RecipeCardsComponent } from './components/entities/recipe-cards/recipe-cards.component';
import { NotificationComponent } from './components/entities/notification/notification.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    AboutComponent,
    RecipeComponent,
    RecipeCarouselImageComponent,
    RecipeCarouselComponent,
    RecipeCardsItemComponent,
    SearchComponent,
    BaseComponent,
    BadgeComponent,
    OutsideClickDirective,
    ScrollToTopDirective,
    RecipeCardsItemComponent,
    RecipeCardsComponent,
    NotificationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    FontAwesomeModule,
    NgxLoadingModule
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
