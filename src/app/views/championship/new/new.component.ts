import { Component } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent {

  counter(i: number) {

    return new Array(i);
  }
}
