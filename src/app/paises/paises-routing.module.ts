import { SelectorComponent } from './pages/selector/selector.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'selector', component: SelectorComponent },
      { path: '**', redirectTo: 'selector' }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaisesRoutingModule { }
