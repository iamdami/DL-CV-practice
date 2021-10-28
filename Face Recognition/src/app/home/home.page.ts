import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public homePages = [
    {
      subtitle: 'withFaceLandMarks',
      title: 'Face Detection',
      url: '/detection',
      content: 'Detect Faces'
    },
    {
      subtitle: 'withFaceExpressions',
      title: 'Face Expression',
      url: '/expression',
      content: 'Detect Face and recognize expression of that face'
    },
    {
      subtitle: 'withAgeAndGender',
      title: 'Age and Gender Recognition',
      url: '/recognition',
      content: 'Detect Face and estimate age and gender for that face'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
