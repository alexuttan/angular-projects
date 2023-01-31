import { Component, OnInit} from '@angular/core';
import { FormGroup,FormBuilder } from "@angular/forms";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  studentForm!:FormGroup
  constructor(private http:HttpClient,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.studentForm=this.fb.group({
      name:'',
      department:''
    }) 
  }

  onSubmit(form:FormGroup){
    let studentData={
      name:form.value.name,
      department:form.value.department
    }
    console.log(studentData);
    
  }

}
