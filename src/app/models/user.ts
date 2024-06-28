import { Championship } from "./championship";
import { Matchup } from "./matchup";
import { Team } from "./team";

export interface User {

  id: number,
  created_at: Date,
  updated_at: Date,
  name: string,
  email: string,
  championships?: Championship[],
  teams?: Team[],
  matchups?: Matchup[]
}
