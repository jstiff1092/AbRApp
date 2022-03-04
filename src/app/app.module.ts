import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { FirebaseService } from './services/firebase.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { JeremyTestingComponent } from './jeremy-testing/jeremy-testing.component';

@NgModule({
  declarations: [AppComponent, JeremyTestingComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, FirebaseService],
  bootstrap: [AppComponent],
})
export class AppModule { }
