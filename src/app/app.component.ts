import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app', 
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
  styleUrls: ['./cliente-inserir.component.css'],
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
}
