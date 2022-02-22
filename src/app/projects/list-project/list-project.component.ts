import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../../core/entities/project';
import { HttpServiceService } from '../../core/services/http-service.service';

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.css']
})
export class ListProjectComponent implements OnInit {
  projects: Array<Project> = [];
  constructor(private httpservice:HttpServiceService,
    private router:Router) { }

  ngOnInit(): void {
      this.loadproject();
     }
loadproject(){
     this.httpservice.get('Projects').subscribe(
      result=>{this.projects=result},
      error=>{console.log(error)}
    )}

delete(id:number){
if (confirm("are you sure to delete this project"))
    this.httpservice.delete("Projects",id).subscribe(result=>{this.loadproject()},
      error=>{console.log(error)})
}
update(id:number){
  this.router.navigate(['update',id])
   }

}


