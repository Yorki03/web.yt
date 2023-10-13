import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ConctatoComponent } from './conctato/conctato.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { PagesRoutingModule } from './pages-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomeComponent,
    ConctatoComponent,
    ServiciosComponent,
    PortafolioComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
