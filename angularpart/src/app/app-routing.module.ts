import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { DeleteComponent } from './delete/delete.component';
import { HomeComponent } from './home/home.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: '*', redirectTo: '/Home', pathMatch: 'full' },
  {
    path: 'add',
    component: AddComponent,
  },
  {
    path: 'update',
    component: UpdateComponent,
  },
  {
    path: 'delete',
    component: DeleteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
