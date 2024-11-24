import ButtonStandart from "@components/shared/Button/ButtonStandart/ButtonStandart";
import InputModal from "@components/shared/Input/InputModal/InputModal";
import { yupResolver } from "@hookform/resolvers/yup";
import { IUser, IUserForm } from "@interfaces/user/user";
import styles from "./UserForm.module.scss";
import schemaUser from "@validations/user";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
interface IPropsUserForm {
  user: IUser;
  onSubmit: (value: IUserForm) => void;
}

const UserForm: FC<IPropsUserForm> = ({ user, onSubmit }) => {
  const { name, email, telegramLink, discordUsername, displayName } = user;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaUser),
    defaultValues: {
      name: name ?? undefined,
      telegramLink: telegramLink ?? undefined,
      discordUsername: discordUsername ?? undefined,
      email: email ?? undefined,
      displayName: displayName ?? undefined,
    },
  });

  const handleSubmitUserForm: SubmitHandler<IUserForm> = (value) => {
    console.log(value);
    const newObj = Object.fromEntries(
      Object.entries(value).map(([key, val]) => [
        key,
        val === "" ? user[key as keyof IUser] ?? "" : val,
      ])
    );
    if (value) onSubmit(newObj);
  };

  return (
    <form
      className={styles.formUser}
      onSubmit={handleSubmit(handleSubmitUserForm)}
    >
      <div>
        <p>Ваш новий унікальний нік</p>
        <InputModal
          hookForm={register("displayName")}
          classN={"transparent"}
          text="Ім'я"
        />
        {errors.displayName && <p>{errors.displayName.message}</p>}
      </div>
      <div>
        <p>Ваше нове ім'я</p>
        <InputModal
          hookForm={register("name")}
          classN={"transparent"}
          text="Ім'я"
        />
        {errors.name && <p>{errors.name.message}</p>}
      </div>
      <div>
        {" "}
        <p>Введіть нову електронну адрессу</p>
        <InputModal
          hookForm={register("email")}
          classN={"transparent"}
          text="Електронна пошта"
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div>
        {" "}
        <p>Введіть нову силку на діскорд</p>
        <InputModal
          hookForm={register("discordUsername")}
          classN={"transparent"}
          text="Діскорд"
        />
        {errors.discordUsername && <p>{errors.discordUsername.message}</p>}
      </div>
      <div>
        <p>Введіть новий нік в телеграмі</p>
        <InputModal
          hookForm={register("telegramLink")}
          classN={"transparent"}
          text="Ваше ім'я в телеграмі"
        />
        {errors.telegramLink && <p>{errors.telegramLink.message}</p>}
      </div>

      <ButtonStandart type="submit">Змінити данні</ButtonStandart>
    </form>
  );
};

export default UserForm;
