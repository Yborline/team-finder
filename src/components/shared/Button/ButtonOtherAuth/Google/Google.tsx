import React, { FC } from "react";
import { ButtonDiscordGoogle } from "@interfaces/form/index";
import ButtonOtherAuth from "../ButtonOtherAuth";
import google from "@assets/img/auth/google.png";
import styles from "./Google.module.scss";
import { useDispatch } from "react-redux";
import operationsAuth from "@redux/auth/auth-operations";
import { AppDispatch, useAppDispatch } from "@interfaces/redux";
import { postGoogleAuth } from "@api/fetchGoogle";

const Google: FC<ButtonDiscordGoogle> = ({ text }) => {
  // const dispatch = useAppDispatch<AppDispatch>();

  const handleCLickGoogle = async () => {
    const response = await postGoogleAuth("/auth/google");
    window.open(response, "_blank");
  };
  return (
    <ButtonOtherAuth onClick={handleCLickGoogle} text={text}>
      <img className={styles.google} src={google} />
    </ButtonOtherAuth>
  );
};

export default Google;
