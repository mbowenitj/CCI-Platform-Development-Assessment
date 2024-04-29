import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepoComponent } from './repos/repo.component';

const routes: Routes = [
  {path: "",  component: RepoComponent, pathMatch: "full"},
  {path: 'repos/',component:RepoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {

}
