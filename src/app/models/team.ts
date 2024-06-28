import { User } from "./user";

export interface Team {

  id: number,
  created_at: Date,
  updated_at: Date,
  name: string,
  user?: User
}
