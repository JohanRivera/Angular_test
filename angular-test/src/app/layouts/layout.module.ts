import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutAuthComponent } from './layout-auth/layout-auth.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule
  ],
  declarations: [LayoutAuthComponent, FooterComponent, HeaderComponent, LayoutComponent],
  exports: [LayoutComponent, FooterComponent, HeaderComponent]
})
export class LayoutModule { }
