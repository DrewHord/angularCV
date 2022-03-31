import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  education = [
    {
      school: "University of Cincinnati",
      years: "2008-2014",
      bdegree: "Organizational Leadership",
      adegree: "Business Administration"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
