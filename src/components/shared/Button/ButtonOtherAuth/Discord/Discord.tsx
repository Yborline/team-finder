import React, { FC } from "react";
import { ButtonDiscordGoogle } from "@interfaces/form/index";
import ButtonOtherAuth from "../ButtonOtherAuth";
import discord from "@assets/img/auth/discord.png";
import styles from "./Discord.module.scss";

const Discord: FC<ButtonDiscordGoogle> = ({ onClick, text }) => {
  return (
    <ButtonOtherAuth onClick={onClick} text={text}>
      <img className={styles.discord} src={discord} />
    </ButtonOtherAuth>
  );
};

export default Discord;
