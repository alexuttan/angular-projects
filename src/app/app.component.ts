import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StudentRegister';
  hidden:boolean =false

  onCreate(){
    this.hidden=!this.hidden
  }
}
