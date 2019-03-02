import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InfoPanelComponent } from './components/info-panel/info-panel.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import {ChefsService} from './services/chefs.service';
import {PromoService} from './services/promo.service';
import {RecipeService} from './services/recipe.service';
import { PromoComponent } from './components/promo/promo.component';
import { ChefsComponent } from './components/chefs/chefs.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import {MenuService} from './services/menu.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InfoPanelComponent,
    RecipeComponent,
    PromoComponent,
    ChefsComponent,
    FooterComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ChefsService, PromoService, RecipeService, MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
