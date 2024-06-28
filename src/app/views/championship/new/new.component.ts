import { Component } from '@angular/core';
import { Team } from 'src/app/models/team';
import { ApiService } from 'src/app/services/api.service';
import { forkJoin } from 'rxjs';
import { Matchup } from 'src/app/models/matchup';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
})
export class NewComponent {

  constructor(private apiService: ApiService) { }

  teams: Team[] = [];
  checkedTeams: Team[] = [];
  name: string = '';
  championship: any = null;

  shuffle(array: any[]) {

    let currentIndex = array.length;

    while (currentIndex != 0) {

      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  }

  randomIntFromInterval(min: number, max: number) {

    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  ngOnInit(): void {

    this.apiService.getArray('/teams').subscribe(response => {

      this.teams = response.data;
    });
  }

  checkTeam(id: number) {

    const checkedTeam = this.checkedTeams.find(team => team.id === id);
    const isChecked = checkedTeam != undefined;

    if (isChecked)  {

      let index = this.checkedTeams.findIndex(team => team.id === id);
      this.checkedTeams.splice(index, 1);
    } else {

      const team = this.teams.find(team => team.id === id);

      if (team != undefined)  {

        this.checkedTeams.push(team);
      }
    }
  }

  hasTeam(id: number): boolean {

    return this.checkedTeams.find(team => team.id === id) != undefined;
  }

  generate()  {

    if (this.checkedTeams.length < 8) {

      alert('Você deve selecionar ao menos 8 times!');
      return;
    }

    if (this.checkedTeams.length > 8) {

      alert('Você deve selecionar até 8 times!')
      return;
    }

    if (this.name.trim().length == 0)   {

      alert('Insira o nome do campeonato!')
      return;
    }

    this.shuffle(this.checkedTeams)
    console.log(this.checkedTeams);

    this.apiService.post('/championships', { name: this.name }).subscribe( response => {

      let championship_id = response.data.id;

      const matchup1A = {

        championship_id: championship_id,
        team_1_id: this.checkedTeams[0].id,
        team_2_id: this.checkedTeams[1].id,
        team_1_goals: this.randomIntFromInterval(1, 10),
        team_2_goals: this.randomIntFromInterval(1, 10),
        phase: 1
      };

      const matchup1B = {

        championship_id: championship_id,
        team_1_id: this.checkedTeams[2].id,
        team_2_id: this.checkedTeams[3].id,
        team_1_goals: this.randomIntFromInterval(1, 10),
        team_2_goals: this.randomIntFromInterval(1, 10),
        phase: 1
      };

      const matchup1C = {

        championship_id: championship_id,
        team_1_id: this.checkedTeams[4].id,
        team_2_id: this.checkedTeams[5].id,
        team_1_goals: this.randomIntFromInterval(1, 10),
        team_2_goals: this.randomIntFromInterval(1, 10),
        phase: 1
      };

      const matchup1D = {

        championship_id: championship_id,
        team_1_id: this.checkedTeams[6].id,
        team_2_id: this.checkedTeams[7].id,
        team_1_goals: this.randomIntFromInterval(1, 10),
        team_2_goals: this.randomIntFromInterval(1, 10),
        phase: 1
      };

      let matchup1A_winner_id = 0;
      let matchup1B_winner_id = 0;
      let matchup1C_winner_id = 0;
      let matchup1D_winner_id = 0;

      if (matchup1A.team_1_goals == matchup1A.team_2_goals)  {

        matchup1A_winner_id = matchup1A.team_1_id;
      } else {

        matchup1A_winner_id = (matchup1A.team_1_goals > matchup1A.team_2_goals) ? matchup1A.team_1_id : matchup1A.team_2_id;
      }

      if (matchup1B.team_1_goals == matchup1B.team_2_goals)  {

        matchup1B_winner_id = matchup1B.team_1_id;
      } else {

        matchup1B_winner_id = (matchup1B.team_1_goals > matchup1B.team_2_goals) ? matchup1B.team_1_id : matchup1B.team_2_id;
      }

      if (matchup1C.team_1_goals == matchup1B.team_2_goals)  {

        matchup1C_winner_id = matchup1C.team_1_id;
      } else {

        matchup1C_winner_id = (matchup1C.team_1_goals > matchup1B.team_2_goals) ? matchup1C.team_1_id : matchup1C.team_2_id;
      }

      if (matchup1D.team_1_goals == matchup1B.team_2_goals)  {

        matchup1D_winner_id = matchup1D.team_1_id;
      } else {

        matchup1D_winner_id = (matchup1D.team_1_goals > matchup1B.team_2_goals) ? matchup1D.team_1_id : matchup1D.team_2_id;
      }

      const matchup2A = {

        championship_id: championship_id,
        team_1_id: matchup1A_winner_id,
        team_2_id: matchup1B_winner_id,
        team_1_goals: this.randomIntFromInterval(1, 10),
        team_2_goals: this.randomIntFromInterval(1, 10),
        phase: 2
      };

      const matchup2B = {

        championship_id: championship_id,
        team_1_id: matchup1C_winner_id,
        team_2_id: matchup1D_winner_id,
        team_1_goals: this.randomIntFromInterval(1, 10),
        team_2_goals: this.randomIntFromInterval(1, 10),
        phase: 2
      };

      let matchup2A_winner_id = 0;
      let matchup2B_winner_id = 0;
      let matchup2A_loser_id = 0;
      let matchup2B_loser_id = 0;

      if (matchup2A.team_1_goals == matchup2A.team_2_goals)  {

        matchup2A_winner_id = matchup2A.team_1_id;
        matchup2A_loser_id = matchup2A.team_2_id;
      } else {

        matchup2A_winner_id = (matchup2A.team_1_goals > matchup2A.team_2_goals) ? matchup2A.team_1_id : matchup2A.team_2_id;
        matchup2A_loser_id = (matchup2A.team_1_goals < matchup2A.team_2_goals) ? matchup2A.team_1_id : matchup2A.team_2_id;
      }

      if (matchup2B.team_1_goals == matchup2B.team_2_goals)  {

        matchup2B_winner_id = matchup2B.team_1_id;
        matchup2B_loser_id = matchup2B.team_2_id;
      } else {

        matchup2B_winner_id = (matchup2B.team_1_goals > matchup2B.team_2_goals) ? matchup2B.team_1_id : matchup2B.team_2_id;
        matchup2B_loser_id = (matchup2B.team_1_goals < matchup2B.team_2_goals) ? matchup2B.team_1_id : matchup2B.team_2_id;
      }

      const matchup3 = {

        championship_id: championship_id,
        team_1_id: matchup2A_loser_id,
        team_2_id: matchup2B_loser_id,
        team_1_goals: this.randomIntFromInterval(1, 10),
        team_2_goals: this.randomIntFromInterval(1, 10),
        phase: 3
      };

      const matchup4 = {

        championship_id: championship_id,
        team_1_id: matchup2A_winner_id,
        team_2_id: matchup2B_winner_id,
        team_1_goals: this.randomIntFromInterval(1, 10),
        team_2_goals: this.randomIntFromInterval(1, 10),
        phase: 4
      };

      const matchup1A_post = this.apiService.post('/matchups', matchup1A);
      const matchup1B_post = this.apiService.post('/matchups', matchup1B);
      const matchup1C_post = this.apiService.post('/matchups', matchup1C);
      const matchup1D_post = this.apiService.post('/matchups', matchup1D);
      const matchup2A_post = this.apiService.post('/matchups', matchup2A);
      const matchup2B_post = this.apiService.post('/matchups', matchup2B);
      const matchup3_post = this.apiService.post('/matchups', matchup3);
      const matchup4_post = this.apiService.post('/matchups', matchup4);

      forkJoin([

        matchup1A_post,
        matchup1B_post,
        matchup1C_post,
        matchup1D_post,
        matchup2A_post,
        matchup2B_post,
        matchup3_post,
        matchup4_post
      ]).subscribe({

        next: () => {

          this.apiService.getObject(`/championships/${championship_id}?matchups`).subscribe((response) =>  {

            console.log(response);
            this.championship = response.data;
          });
        }
      });
    });
  }
}
