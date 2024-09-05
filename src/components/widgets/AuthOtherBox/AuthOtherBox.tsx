import Discord from "@components/shared/Button/ButtonOtherAuth/Discord/Discord";
import Google from "@components/shared/Button/ButtonOtherAuth/Google/Google";
import styles from "./AuthOtherBox.module.scss";

const AuthOtherBox = () => {
  const handleAuthDiscord = () => {};
  const handleAuthGoogle = () => {};
  return (
    <div className={styles.boxAuthOther}>
      <Google onClick={handleAuthGoogle} text={"Google"} />
      <Discord onClick={handleAuthDiscord} text={"Discord"} />
    </div>
  );
};

export default AuthOtherBox;
