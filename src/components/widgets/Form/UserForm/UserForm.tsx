import ButtonStandart from "@components/shared/Button/ButtonStandart/ButtonStandart";
import InputModal from "@components/shared/Input/InputModal/InputModal";
import { yupResolver } from "@hookform/resolvers/yup";
import { IUser, IUserForm } from "@interfaces/user/user";
import styles from "./UserForm.module.scss";
import schemaLogin from "@validations/login";
import schemaUser from "@validations/user";
import React, { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
interface IPropsUserForm {
  user: IUser;
  onSubmit: (value: IUserForm) => void;
}

const UserForm: FC<IPropsUserForm> = ({ user, onSubmit }) => {
  const { name, email, telegramLink, discordUsername } = user;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaUser),
    defaultValues: {
      name: name ?? undefined,
      telegramLink: telegramLink ?? undefined,
      discordUsername: discordUsername ?? undefined,
      email: email ?? undefined,
    },
  });

  const handleSubmitUserForm: SubmitHandler<IUserForm> = (value) => {
    console.log(value);

    if (value) onSubmit(value);
  };

  return (
    <form
      className={styles.formUser}
      onSubmit={handleSubmit(handleSubmitUserForm)}
    >
      <div>
        <p>Введіть ваше нове ім'я</p>
        <InputModal
          hookForm={register("name")}
          classN={"transparent"}
          text="Ім'я"
        />
      </div>
      <div>
        {" "}
        <p>Введіть нову електронну адрессу</p>
        <InputModal
          hookForm={register("email")}
          classN={"transparent"}
          text="Електронна пошта"
        />
      </div>
      <div>
        {" "}
        <p>Введіть нову силку на діскорд</p>
        <InputModal
          hookForm={register("discordUsername")}
          classN={"transparent"}
          text="Діскорд"
        />
      </div>
      <div>
        <p>Введіть новий нік в телеграмі</p>
        <InputModal
          hookForm={register("telegramLink")}
          classN={"transparent"}
          text="Ваше ім'я в телеграмі"
        />
      </div>
      {errors.name && <p>{errors.name.message}</p>}
      {errors.email && <p>{errors.email.message}</p>}
      {errors.discordUsername && <p>{errors.discordUsername.message}</p>}
      {errors.telegramLink && <p>{errors.telegramLink.message}</p>}
      <ButtonStandart type="submit">dsdsdsd</ButtonStandart>
    </form>
  );
};

export default UserForm;
