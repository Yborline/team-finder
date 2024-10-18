import React, { useState } from "react";
import styles from "./UserPage.module.scss";
import { useAppDispatch } from "@interfaces/redux";
import operationsAuth from "@redux/auth/auth-operations";
import ButtonStandart from "@components/shared/Button/ButtonStandart/ButtonStandart";
import InputModal from "@components/shared/Input/InputModal/InputModal";

const objNew = {
  name: "user",
  email: "email",
  telegram: "telegram",
  discord: "discord",
};

const UserPage = () => {
  const { name, email, telegram, discord } = objNew;
  const [showChange, setShowChange] = useState(false);
  const dispatch = useAppDispatch();

  const startChangeUser = () => {
    if (!showChange) setShowChange(!showChange);
    else dispatch(operationsAuth.changeInfoUser());
  };

  return (
    <div className={styles.boxUser}>
      <div>
        <p>Ім'я: {name}</p>
      </div>
      <div>
        <p>Пошта: {email}</p>
      </div>
      <div>
        <p>Телеграм: {telegram}</p>
      </div>
      <div>
        <p>Діскорд: {discord}</p>
      </div>

      <ButtonStandart onClick={startChangeUser}>Змінити данні</ButtonStandart>
    </div>
  );
};

export default UserPage;
