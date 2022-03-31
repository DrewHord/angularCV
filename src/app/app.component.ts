import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular-cv';
 
  name: string ="Andrew Hord"
  email: string ="drewhord@gmail.com"
  location: string="Batavia, OH 45103"

 technologies: string[]= [ "Git",  "SQL",  "C#",  
 "Spring", "Css", "Scrum",  
 "HTML", "JAVA", "JSON",  
 "Eclipse", "Visual Studio 2019", "Bootstrap"
 ];

 workHistory = [ 
   {
   
   name: "Unted States Postal Service",
   year: "2016-2022",
   jobtitle: "Full Time Regular Clerk",
   role1: "customer service",
   role2: "weekly supply database"   
  
},
{
  
  name: "Total Quality Logistics",
  year: "2013-2015",
  jobtitle: "Logistics Account Executive ",
  role1: "daily lead generation",
  role2:  "resolved shipping issues"
}
]

education = [
  {
    school: "University of Cincinnati",
    years: "2008-2014",
    bdegree: "Organizational Leadership",
    adegree: "Business Administration"
  }
]


  
}
