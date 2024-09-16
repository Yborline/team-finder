import { IListPlayerItem } from "@interfaces/teamList";
import { FC } from "react";
import styles from "./ListPlayers.module.scss";
import { useLocation, useNavigate } from "react-router-dom";

const ListPlayers: FC<{ list: IListPlayerItem[] }> = ({ list }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const redirectToPlayerPage = (id) => {
    const currentPath = location.pathname;
    navigate(`${currentPath}/${id}`);
  };
  return (
    <ul className={styles.listPlayers}>
      {list.map(({ name, tags, type, game, id }) => (
        <li
          onClick={() => redirectToPlayerPage(id)}
          className={styles.boxPlayer}
          key={id}
        >
          <h3 className={styles.namePlayer}>{name}</h3>
          <p>game: {game}</p>
          <p>type: {type}</p>
          {tags && (
            <>
              <p>tags: </p>
              <p>{tags.join(", ")}</p>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default ListPlayers;
