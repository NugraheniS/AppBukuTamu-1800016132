import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';

import { MaterialDesign } from './material/material';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { TambahDataComponent } from './tambah-data/tambah-data.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailDataComponent } from './detail-data/detail-data.component';
import { DialogKonfirmasiComponent } from './dialog-konfirmasi/dialog-konfirmasi.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    TambahDataComponent,
    DetailDataComponent,
    DialogKonfirmasiComponent
  ],
  entryComponents: [
    TambahDataComponent,
    DetailDataComponent,
    DialogKonfirmasiComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialDesign, 
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
