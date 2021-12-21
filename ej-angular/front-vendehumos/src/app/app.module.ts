import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CmpVendehumosComponent } from './cmp-vendehumos/cmp-vendehumos.component';
import { CmpHeaderComponent } from './cmp-header/cmp-header.component';


@NgModule({
  declarations: [
    AppComponent,
    CmpVendehumosComponent,
    CmpHeaderComponent
  ],
  imports: [
    BrowserModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
