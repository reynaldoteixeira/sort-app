import { HtmlParser } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [
  { path:'', redirectTo: 'home', pathMatch: 'full' }, //Redireciona para a rota com nome 'home'
  { path: 'home', component: HomeComponent },
  { path: 'upload-file', component: UploadComponent },
  { path: 'list', component: ListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
