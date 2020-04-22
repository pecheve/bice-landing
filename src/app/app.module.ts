import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { HeaderComponent } from './components/header/header.component';
import { TarifasComponent } from './components/tarifas/tarifas.component';
import { CreaCuentaComponent } from './components/crea-cuenta/crea-cuenta.component';
import { PreguntasFrecuentesComponent } from './components/preguntas-frecuentes/preguntas-frecuentes.component';
import { FooterComponent } from './components/footer/footer.component';
import { BeneficiosComponent } from './components/beneficios/beneficios.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HeaderComponent,
    TarifasComponent,
    CreaCuentaComponent,
    PreguntasFrecuentesComponent,
    FooterComponent,
    BeneficiosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide: 'googleTagManagerId',  useValue: "GTM-5JNGVV2"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
