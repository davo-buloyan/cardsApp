import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppComponent } from '@app/app.component';
import { CardsComponent } from '@app/cards/cards.component';
import { AppRoutingModule } from '@app/app-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { cardsReducer, ICardsState } from './store/cards/cards.reducer';

export interface IState {
  cards: ICardsState;
}

@NgModule({
  declarations: [AppComponent, CardsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    DragDropModule,
    StoreModule.forRoot({ cards: cardsReducer }, {}),
    // EffectsModule.forRoot([
    //   CardsEffects
    // ]),
    StoreDevtoolsModule.instrument({ name: 'Cards App' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
