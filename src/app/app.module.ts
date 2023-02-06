import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { CreatorComponent } from './pages/creator/creator.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BlogComponent } from './pages/blog/blog.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
@NgModule({
  declarations: [AppComponent, HeaderComponent, CreatorComponent, BlogComponent, LoaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
