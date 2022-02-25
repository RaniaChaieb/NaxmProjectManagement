import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateProjectComponent } from './create-project/create-project.component';
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
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import { UpdateProjectComponent } from './update-project/update-project.component';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  providers:[ConfirmationService],
  
  declarations: [
    CreateProjectComponent,
    ListProjectComponent,
    UpdateProjectComponent,
    MenuComponent
  ],
  exports:[
    CreateProjectComponent,
    ListProjectComponent,
    UpdateProjectComponent,
    MenuComponent],

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
    ConfirmDialogModule,
    MenubarModule

  ]
})
export class ProjectsModule { }
