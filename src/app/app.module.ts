import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {
  MatProgressBarModule,
  MatToolbarModule,
  MatInputModule,
  MatDialogModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { PokemonItemComponent } from './pokemon-item/pokemon-item.component';
import { PokemonDialogComponent } from './pokemon-dialog/pokemon-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonItemComponent,
    PokemonDialogComponent
  ],
  entryComponents: [
    PokemonDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatInputModule,
    MatDialogModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
