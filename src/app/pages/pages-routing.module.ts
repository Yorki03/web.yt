import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ConctatoComponent } from './conctato/conctato.component';
import { PortafolioComponent } from './portafolio/portafolio.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'servicio',
    component: ServiciosComponent
  },
  {
    path: 'contacto',
    component: ConctatoComponent
  },
  {
    path: 'portafolio',
    component: PortafolioComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class PagesRoutingModule { }
