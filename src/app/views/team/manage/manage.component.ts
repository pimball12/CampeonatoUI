import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/models/team';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  teams: Team[] = [];
  name: string = '';

  ngOnInit(): void {

    this.apiService.getArray('/teams').subscribe(response => {

      this.teams = response.data
    });
  }

  add() {

    if (this.name.trim().length) {

      this.apiService.post('/teams', {

        'name': this.name
      }).subscribe(response => {

        this.name = '';
        this.teams.push(response.data);
      });
    }
  }

  delete(id: number, index: number) {

    this.apiService.delete('/teams', id).subscribe({

      next: () =>{

        this.teams.splice(index, 1);
      },

      error: () => {

        alert("Não é possível deletar times que já estiveram em campeonato.");
      }
    });
  }


}
