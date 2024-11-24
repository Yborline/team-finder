import { FC } from "react";
import styles from "./ListPlayers.module.scss";
// import { useLocation, useNavigate } from "react-router-dom";
import imgDiscord from "@assets/img/auth/discord.png";
import imgTelegram from "@assets/img/socials/telegram.png";
import { Post } from "@interfaces/posts";

const ListPlayers: FC<{ list: Post[] }> = ({ list }) => {
  // const location = useLocation();
  // const navigate = useNavigate();
  // const redirectToPlayerPage = (id: number) => {
  //   const currentPath = location.pathname;
  //   navigate(`${currentPath}/${id}`);
  // };

  const handleRedirectDiscord = (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>,
    value: string
  ) => {
    event.stopPropagation();
    if (value) handleRedirect(`${value}`);
  };

  const handleRedirectTelegram = (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>,
    value: string
  ) => {
    event.stopPropagation();
    if (value) handleRedirect(`https://t.me/${value}`);
  };

  const handleRedirect = (value: string) => {
    if (value) window.open(value, "_blank");
  };

  return (
    <ul className={styles.listPlayers}>
      {list.map(({ name, tags, type, game, id, text, socials }) => (
        <li
          // onClick={() => redirectToPlayerPage(id)}
          className={styles.boxPlayer}
          key={id}
        >
          <div>
            <h3 className={styles.namePlayer}>{name}</h3>
            <p>game: {game}</p>
            <p>type: {type}</p>
            <p>{text}</p>
            {tags && (
              <>
                <p>tags: </p>
                <p>{tags.join(", ")}</p>
              </>
            )}
          </div>
          <div className={styles.boxSocials}>
            {socials?.discord && (
              <img
                className={styles.imgSocial}
                onClick={(e) => handleRedirectDiscord(e, socials.discord!)}
                src={imgDiscord}
              />
            )}
            {socials?.telegram && (
              <img
                className={styles.imgSocial}
                onClick={(e) => handleRedirectTelegram(e, socials.telegram!)}
                src={imgTelegram}
              />
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ListPlayers;
