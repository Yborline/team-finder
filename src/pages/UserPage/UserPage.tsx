import React, { useState } from "react";
import styles from "./UserPage.module.scss";
import { useAppDispatch } from "@interfaces/redux";
import operationsAuth from "@redux/auth/auth-operations";
import ButtonStandart from "@components/shared/Button/ButtonStandart/ButtonStandart";
import UserForm from "@components/widgets/Form/UserForm/UserForm";
import { useSelector } from "react-redux";
import { getUser } from "@redux/auth/auth-selector";
import { IUserForm } from "@interfaces/user/user";

const objNew = {
  name: "user",
  email: "email",
  telegramLink: "telegram",
  discordUsername: "discord",
};

const UserPage = () => {
  const { id, name, email, telegramLink, discordUsername } = objNew;
  const [showChange, setShowChange] = useState(false);
  const user = useSelector(getUser);
  const dispatch = useAppDispatch();

  const changeStatusChange = () => {
    setShowChange(!showChange);
  };

  const handleSaveInfo = (info: IUserForm) => {
    dispatch(operationsAuth.changeInfoUser(info));
  };

  return (
    <div className={styles.boxUser}>
      {showChange ? (
        <div className={styles.boxInfoForm}>
          <UserForm user={user} onSubmit={handleSaveInfo} />
          <ButtonStandart onClick={changeStatusChange}>
            Відмінити
          </ButtonStandart>
        </div>
      ) : (
        <div className={styles.boxInfo}>
          <div>
            <p>Ім'я: {name}</p>
          </div>
          <div>
            <p>Пошта: {email}</p>
          </div>
          <div>
            <p>Телеграм: {telegramLink}</p>
          </div>
          <div>
            <p>Діскорд: {discordUsername}</p>
          </div>
          <ButtonStandart onClick={changeStatusChange}>
            Змінити данні
          </ButtonStandart>
        </div>
      )}
    </div>
  );
};

export default UserPage;
