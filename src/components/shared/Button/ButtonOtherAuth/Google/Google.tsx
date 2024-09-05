import React, { FC } from "react";
import { ButtonDiscordGoogle } from "@interfaces/form/index";
import ButtonOtherAuth from "../ButtonOtherAuth";
import google from "@assets/img/auth/google.png";
import styles from "./Google.module.scss";

const Google: FC<ButtonDiscordGoogle> = ({ onClick, text }) => {
  return (
    <ButtonOtherAuth onClick={onClick} text={text}>
      <img className={styles.google} src={google} />
    </ButtonOtherAuth>
  );
};

export default Google;
