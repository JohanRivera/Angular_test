import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
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
    AppRoutingModule,
    HttpClientModule,
    NgxDatatableModule.forRoot({
      messages: {
        emptyMessage: 'Sin registros para mostrar', // Message to show when array is presented, but contains no values
        totalMessage: 'registros existentes', // Footer total message
        selectedMessage: 'registro seleccionado' // Footer selected message
      }
    })
  ],
  providers: [
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
