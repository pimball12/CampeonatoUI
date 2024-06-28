import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private apiService: ApiService){}

  championships: any = [];

  ngOnInit(): void {

    this.apiService.getArray('/championships?matchups').subscribe(response => {

      this.championships = response.data.reverse();
    })
  }
}
