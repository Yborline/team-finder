import React, { FC } from "react";
import { ButtonDiscordGoogle } from "@interfaces/form/index";
import ButtonOtherAuth from "../ButtonOtherAuth";
import google from "@assets/img/auth/google.png";
import styles from "./Google.module.scss";
import { useDispatch } from "react-redux";
import operationsAuth from "@redux/auth/auth-operations";
import { AppDispatch, useAppDispatch } from "@interfaces/redux";
import { postGoogleAuth } from "@api/fetchGoogle";
import {
  CredentialResponse,
  GoogleLogin,
  useGoogleLogin,
} from "@react-oauth/google";

const Google: FC<ButtonDiscordGoogle> = ({ text }) => {
  const dispatch = useAppDispatch<AppDispatch>();

  const handleSuccessGoogle = (credentialResponse: CredentialResponse) => {
    const { credential } = credentialResponse;
    if (credential) dispatch(operationsAuth.logInG(credential));
  };
  console.log(text);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      console.log(codeResponse);
      const { code } = codeResponse;
      if (code) dispatch(operationsAuth.logInG(code));
    },
    flow: "auth-code",
  });
  return (
    // <>
    //   <GoogleLogin
    //     onSuccess={handleSuccessGoogle}
    //     onError={() => {
    //       console.log("Login Failed");
    //     }}
    //   />
    // </>
    <ButtonOtherAuth onClick={login} text={text}>
      <img className={styles.google} src={google} />
    </ButtonOtherAuth>
  );
};

export default Google;
