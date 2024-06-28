import { Matchup } from "./matchup";
import { User } from "./user";

export interface Championship {

  id: number,
  created_at: Date,
  updated_at: Date,
  name: string,
  user: User,
  matchups: Matchup[]
}
