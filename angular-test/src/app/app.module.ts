import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { AppRoutingModule } from './app-routing-module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layouts/layout.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    AppRoutingModule
  ],
  providers: [
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
