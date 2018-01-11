import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { LocationStrategy, HashLocationStrategy } from '@angular/common';

// Modules
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { SidebarModule } from './modules/sidebar/sidebar.module';
import { NavbarModule } from './modules/shared/navbar/navbar.module';
import { FooterModule } from './modules/shared/footer/footer.module';

// Components
import { DashboardComponent } from './modules/dashboard/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    SidebarModule,
    NavbarModule,
    FooterModule,
    RouterModule.forRoot([])
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
