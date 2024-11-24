// import Discord from "@components/shared/Button/ButtonOtherAuth/Discord/Discord";
import Google from "@components/shared/Button/ButtonOtherAuth/Google/Google";
import styles from "./AuthOtherBox.module.scss";

const AuthOtherBox = () => {
  return (
    <div className={styles.boxAuthOther}>
      <Google text={"Google"} />
      {/* <Discord text={"Discord"} /> */}
    </div>
  );
};

export default AuthOtherBox;
