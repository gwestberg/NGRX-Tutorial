import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatCardModule, MatFormFieldModule, MatInputModule } from '@angular/material';

import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';
import { BananaComponent } from './banana/banana.component';
import {RotService} from './rot.service';

import { StoreModule } from '@ngrx/store';
import { reducers, initialState, effects } from './app.state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    EffectsModule.forRoot(effects),
    RouterModule.forRoot(AppRoutes),
    StoreModule.forRoot(reducers, {initialState}),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    })
  ],
  declarations: [ 
    AppComponent, 
    BananaComponent 
  ],
  bootstrap: [ 
    AppComponent 
  ]
})
export class AppModule { }
