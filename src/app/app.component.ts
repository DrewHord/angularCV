import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
 
  name: string ="Andrew Hord"
  email: string ="drewhord@gmail.com"
  location: string="Batavia, OH 45103"

 technologies = [ 
   {a:"Git",  b:"SQL",  c:"C#"},
   {a:"Spring", b:"Css", c:"Scrum"} ,
   {a:"HTML", b:"JAVA", c:"JSON"},  
   {a:"Eclipse", b:"Visual Studio 2019", c:"Bootstrap"}
 ];



education = [
  {
    school: "University of Cincinnati",
    years: "2008-2014",
    bdegree: "Organizational Leadership",
    adegree: "Business Administration"
  }
]


  
}
