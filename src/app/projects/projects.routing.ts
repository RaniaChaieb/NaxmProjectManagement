import { Routes } from "@angular/router";
import { CreateProjectComponent } from "./create-project/create-project.component";
import { ListProjectComponent } from "./list-project/list-project.component";
import { UpdateProjectComponent } from "./update-project/update-project.component";

const routes: Routes = [
  {
    path:'',
    component:ListProjectComponent
  },
  {
    path:'create',
    component:CreateProjectComponent
  },
  {
    path:'update/:id',
    component:UpdateProjectComponent
  }

]
export default routes;
