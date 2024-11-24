import { FC } from "react";
import { ButtonDiscordGoogle } from "@interfaces/form/index";
import ButtonOtherAuth from "../ButtonOtherAuth";
import google from "@assets/img/auth/google.png";
import styles from "./Google.module.scss";
import operationsAuth from "@redux/auth/auth-operations";
import { AppDispatch, useAppDispatch } from "@interfaces/redux";
import { useGoogleLogin } from "@react-oauth/google";

const Google: FC<ButtonDiscordGoogle> = ({ text }) => {
  const dispatch = useAppDispatch<AppDispatch>();

  // const handleSuccessGoogle = (credentialResponse: CredentialResponse) => {
  //   const { credential } = credentialResponse;
  //   if (credential) dispatch(operationsAuth.logInG(credential));
  // };

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      const { access_token } = codeResponse;
      if (access_token) {
        dispatch(operationsAuth.logInG(access_token));
      }
    },
    onError: (error) => {
      console.log("Error:", error);
    },
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
