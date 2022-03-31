import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workexperience',
  templateUrl: './workexperience.component.html',
  styleUrls: ['./workexperience.component.css']
})
export class WorkexperienceComponent implements OnInit {

  workHistory = [ 
    {
    
    name: "Unted States Postal Service",
    year: "2016-2022",
    jobtitle: "Full Time Regular Clerk",
    role1: "Customer service",
    role2: "Weekly supply database"   
   
 },
 {  
   name: "Total Quality Logistics",
   year: "2013-2015",
   jobtitle: "Logistics Account Executive ",
   role1: "Daily lead generation",
   role2:  "Resolved shipping issues"
 }
 ]

  constructor() { }

  ngOnInit(): void {
  }

}
