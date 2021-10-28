import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: 'home', icon: 'home' },
    { title: 'Face Detection', url: 'detection', icon: 'person-circle' },
    { title: 'Face Expression', url: 'expression', icon: 'happy' },
    { title: 'Face Recognition', url: 'recognition', icon: 'person' },
  ];
  constructor() {}
}
