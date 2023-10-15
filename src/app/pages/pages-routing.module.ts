import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ConctatoComponent } from './conctato/conctato.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { PreciosComponent } from './precios/precios.component';
import { ProductosComponent } from './productos/productos.component';
import { NosotrosComponent } from './nosotros/nosotros.component';

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
  },
  {
    path: 'precios',
    component: PreciosComponent
  },
  {
    path: 'productos',
    component: ProductosComponent
  },
  {
    path: 'nosotros',
    component: NosotrosComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class PagesRoutingModule { }
