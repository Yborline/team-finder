export type typeSearch = "lookingForPlayers" | "lookingForGroup";

export interface IListPlayerItem {
  name: string;
  type: typeSearch;
  game: string;
  tags?: string[];
  id: string;
  comment?: string;
  telegram: null | string;
  discord: null | string;
}
