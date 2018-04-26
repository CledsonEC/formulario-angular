import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { FilmePageComponent } from './cadastro/pages/filme-page/filme-page.component';
import { FilmeFormComponent } from './cadastro/pages/components/filme-form/filme-form.component';


@NgModule({
  declarations: [
    AppComponent,
    FilmePageComponent,
    FilmeFormComponent,
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
