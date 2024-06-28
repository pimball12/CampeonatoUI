import { Championship } from "./championship";
import { Team } from "./team";
import { User } from "./user";

export interface Matchup {

  id: number,
  created_at: Date,
  updated_at: Date,
  team_1_goals: number,
  team_2_goals: number,
  phase: number,
  user?: User,
  team_1?: Team,
  team_2?: Team,
  championship?: Championship
}
