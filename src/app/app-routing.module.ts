import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemComponent } from './ui/item/item.component';


const routes: Routes = [
  { path: 'item', component: ItemComponent},
  { path: '', redirectTo: '/item', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
