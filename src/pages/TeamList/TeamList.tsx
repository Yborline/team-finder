import Filter from "@components/widgets/Filter/Filter";
import ListPlayers from "@components/widgets/ListPlayers/ListPlayers";
import { IListPlayerItem } from "@interfaces/teamList";
import styles from "./TeamList.module.scss";
import { useDebugValue, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, useAppDispatch } from "@interfaces/redux";
import postsOperations from "@redux/posts/posts-operations";
import { getPosts } from "@redux/posts/posts-selector";

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
    id: "123132132",
  },
  {
    name: "Lol",
    type: "solo",
    game: "dota 2",
    tags: ["mid", "pudge", "4k mmr"],
    id: "12313213",
  },
  {
    name: "LLLLLLLLLLLLLLLLLLLL",
    type: "solo",
    game: "dota 2",
    tags: ["mid", "pudge", "4k mmr"],
    id: "1111211",
  },
  {
    name: "Lol",
    type: "solo",
    game: "dota 2",
    tags: ["mid", "pudge", "4k mmr"],
    id: "12313213212",
  },
  {
    name: "Lol",
    type: "solo",
    game: "dota 2",
    tags: ["mid", "pudge", "4k mmr"],
    id: "12313213223",
  },
  {
    name: "LLLLLLLLLLLLLLLLLLLL",
    type: "solo",
    game: "dota 2",
    tags: ["mid", "pudge", "4k mmr"],
    id: "1111211141",
  },
  {
    name: "Lol",
    type: "solo",
    game: "dota 2",
    tags: ["mid", "pudge", "4k mmr"],
    id: "12313213215",
  },
  {
    name: "Lol",
    type: "solo",
    game: "dota 2",
    tags: ["mid", "pudge", "4k mmr"],
    id: "12313213226",
  },
];

const TeamList = () => {
  const dispatch = useAppDispatch<AppDispatch>();
  const posts = useSelector(getPosts);
  useEffect(() => {
    dispatch(postsOperations.getPosts());
  }, []);
  return (
    <div className={styles.boxTeam}>
      <Filter />
      <ListPlayers list={mokkaPlayers} />
    </div>
  );
};

export default TeamList;
