import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from '../../core/entities/customer';
import { Project } from '../../core/entities/project';
import { Status } from '../../core/entities/status';
import { HttpServiceService } from '../../core/services/http-service.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {
  creatForm!: FormGroup;
  project!: Project ;
  customer:Array<Customer>=[]
  status:Array<Status>=[];
  constructor(private formBuilder:FormBuilder,
    private httpservice:HttpServiceService,
    private router:Router) { }

  ngOnInit(): void {
    this.initializeForm();
    this.getCustomer();
    this.getStatus();
    this.create();
  }
  get form() {
    return this.creatForm.controls;
  }
  /**
   * initializeForm()
   */
   private initializeForm(): void {
    this.creatForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(4)]],
      description: ['', [Validators.required, Validators.minLength(4)]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      budget: ['', [Validators.required]],
      cost: ['', [Validators.required]],
      managerName:['', [Validators.required]],
      customerId:['', [Validators.required]],
      statusId:['', [Validators.required]],
    });
  }
create(){
  this.project = this.creatForm.value;
  this.httpservice.create("Projects",this.project).subscribe((response) => {
    if (response) {
    this.router.navigate(['/'])}}
  )
}
getStatus(){
  this.httpservice.get("Status").subscribe((response) => {
    this.status = response;
    console.log(this.status);

})}
getCustomer(){
  this.httpservice.get('Customer').subscribe((response) => {
    this.customer = response;
    console.log(this.customer);

})}
}
