import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateProjectComponent } from './create-project/create-project.component';
import { UpdateProjectComponent } from './update-project/update-project.component';
import { ListProjectComponent } from './list-project/list-project.component';
import { RouterModule } from '@angular/router';
import routes from './projects.routing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';



@NgModule({
  declarations: [
    CreateProjectComponent,ListProjectComponent,UpdateProjectComponent
  ],
  exports:[CreateProjectComponent,ListProjectComponent,UpdateProjectComponent],

  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    CalendarModule,
    DropdownModule,
    BrowserAnimationsModule,
    FormsModule,
    TableModule,

  ]
})
export class ProjectsModule { }
