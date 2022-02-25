import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../../core/entities/project';
import { HttpServiceService } from '../../core/services/http-service.service';
import { ToastrService } from 'ngx-toastr';
import { ConfirmationService, MenuItem } from 'primeng/api';

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.css']
})
export class ListProjectComponent implements OnInit {
  projects: Array<Project> = [];
  constructor(private httpservice:HttpServiceService,
    private router:Router,private toastr: ToastrService,
    private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
      this.loadproject();
     }

     confirm(id:number) {
      this.confirmationService.confirm({
          message: 'Etes-vous sûr de vouloir supprimer ce projet?',
          accept: () => {
            this.httpservice.delete("Projects",id).subscribe(result=>{this.loadproject()},
            error=>{console.log(error)})
            this.toastr.error('projet supprimé avec succes!'); } });}

      loadproject(){
       this.httpservice.get('Projects').subscribe(
        result=>{this.projects=result},
        error=>{console.log(error)}
    )}

delete(id:number){
if (confirm("are you sure to delete this project"))
    this.httpservice.delete("Projects",id).subscribe(result=>{this.loadproject()},
      error=>{console.log(error)})
      this.toastr.error('project deleted successfully!');
}
update(id:number){
  this.router.navigate(['update',id])
   }
}
