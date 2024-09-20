export interface IListPlayerItem {
  name: string;
  type: "solo" | "group";
  game: string;
  tags?: string[];
  id: string;
  comment?: string;
}
