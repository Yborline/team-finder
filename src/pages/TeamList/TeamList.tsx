import ListPlayers from "@components/widgets/ListPlayers/ListPlayers";

const mokkaPlayers = [
  {
    name: "Lol",
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
    <>
      <ListPlayers list={mokkaPlayers} />
    </>
  );
};

export default TeamList;
