import { PaisesRoutingModule } from './paises-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectorComponent } from './pages/selector/selector.component';
import { ReactiveFormsModule } from '@angular/forms';

/** Paises módulo
 * ng g module paises --routing (Crea el módulo paises y el módulo paises routing)
 * Declarar y exportar todos los componentes de paises
 */

@NgModule({
  declarations: [
    SelectorComponent
  ],
  imports: [
    CommonModule,
    PaisesRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    SelectorComponent 
  ]
})
export class PaisesModule { }
