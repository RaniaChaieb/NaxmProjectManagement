import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProjectComponent } from './projects/create-project/create-project.component';
import { ListProjectComponent } from './projects/list-project/list-project.component';
import { UpdateProjectComponent } from './projects/update-project/update-project.component';

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
