import { IListPlayerItem } from "@interfaces/teamList";
import { FC } from "react";

const ListPlayers: FC<{ list: IListPlayerItem[] }> = ({ list }) => {
  return (
    <ul>
      {list.map(({ name, tags, type, game, id }) => (
        <li key={id}>
          <h3>{name}</h3>
          <p>{game}</p>
          <p>{type}</p>
          {tags && tags.map((tag) => <p key={tag}>{tag}</p>)}
        </li>
      ))}
    </ul>
  );
};

export default ListPlayers;
