import Filter from "@components/widgets/Filter/Filter";
import ListPlayers from "@components/widgets/ListPlayers/ListPlayers";
import { IListPlayerItem } from "@interfaces/teamList";
import styles from "./TeamList.module.scss";

const mokkaPlayers: IListPlayerItem[] = [
  {
    name: "LLLLLLLLLLLLLLLLLLLL",
    type: "solo",
    game: "dota 2",
    tags: ["mid", "pudge", "4k mmr"],
    id: "11112111",
  },
  {
    name: "Lol",
    type: "solo",
    game: "dota 2",
    tags: ["mid", "pudge", "4k mmr"],
    id: "1231321321",
  },
  {
    name: "Lol",
    type: "solo",
    game: "dota 2",
    tags: ["mid", "pudge", "4k mmr"],
    id: "1231321322",
  },
];

const TeamList = () => {
  return (
    <div className={styles.boxTeam}>
      <Filter />
      <ListPlayers list={mokkaPlayers} />
    </div>
  );
};

export default TeamList;
