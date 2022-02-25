import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../../core/entities/customer';
import { Project } from '../../core/entities/project';
import { Status } from '../../core/entities/status';
import { HttpServiceService } from '../../core/services/http-service.service';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css']
})
export class UpdateProjectComponent implements OnInit {
updateForm!: FormGroup;
  project!: Project ;
  customer!:Array<Customer>;
  status!: Array<Status>;
  id!:number;
  constructor(private formBuilder:FormBuilder,
    private httpservice:HttpServiceService,
    private router:Router,
    private route:ActivatedRoute) { }

    ngOnInit(): void {
       this.id = this.route.snapshot.params['id'];
       console.log(this.id)
      this.initializeForm();
      this.getCustomer();
      this.getStatus();
      this.loadProject(this.id);
    }
    get form() {
      return this.updateForm.controls;
    }
    /**
     * initializeForm()
     */
     private initializeForm(): void {
      this.updateForm = this.formBuilder.group({
        title: ['', [Validators.required, Validators.minLength(4)]],
        description: ['', [Validators.required, Validators.minLength(20)]],
        startDate: ['', [Validators.required]],
        endDate: ['', [Validators.required]],
        budget: ['', [Validators.required]],
        cost: ['', [Validators.required]],
        managerName:['', [Validators.required]],
        customerId:['', [Validators.required]],
        statusId:['', [Validators.required]]
      });
    }
/**
   * loadProject
   */
 public loadProject(id:number) {
  this.httpservice.findById("Projects",this.id).subscribe((response) =>{
    this.project=response;
    console.log(response);
    this.loadform();
  })}

/**
   * loadForm
*/
 private loadform() {
  this.updateForm.controls['title'].setValue(this.project.title);
  this.updateForm.controls['description'].setValue(this.project.description);
  this.updateForm.controls['startDate'].setValue(this.project.startDate);
  this.updateForm.controls['endDate'].setValue(this.project.endDate);
  this.updateForm.controls['budget'].setValue(this.project.budget);
  this.updateForm.controls['cost'].setValue(this.project.cost);
  this.updateForm.controls['managerName'].setValue(this.project.managerName);
  this.updateForm.controls['customerId'].setValue(this.project.customerId);
  this.updateForm.controls['statusId'].setValue(this.project.statusId);


}
/**
   * Update()
*/
public update() {
  this.httpservice.update("Projects",this.id,this.updateForm.value).subscribe((response) => {
  if (response) {
   this.router.navigate(['/']);}})}

/**
   * la liste des status
*/
   getStatus(){
    this.httpservice.get("Status").subscribe((response) => {
      this.status = response;
      console.log(this.status);})}

  /**
   * la liste des Clients
*/
  getCustomer(){
    this.httpservice.get("Customer").subscribe((response) => {
      this.customer = response;
      console.log(this.customer);})}


    }

