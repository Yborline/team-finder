import React, { FC } from "react";
import styles from "./Register.module.scss";
import InputModal from "@components/shared/InputModal/InputModal";
import { IoCloseSharp } from "react-icons/io5";
import { IconContext } from "react-icons";
import { useForm } from "react-hook-form";

interface IPropsRegister {
  close: () => void;
}
interface Inputs {
  example: string;
  exampleRequired: string;
}

const Register: FC<IPropsRegister> = ({ close }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  return (
    <form className={styles.boxRegister}>
      <IconContext.Provider value={{ className: styles.closeIcon }}>
        <IoCloseSharp onClick={close} />
      </IconContext.Provider>

      <InputModal changeInput={() => {}} text="Нікнейм" value="" />
      <InputModal changeInput={() => {}} text="Електронна адреса" value="" />
      <InputModal changeInput={() => {}} text="Пароль" value="" />
      <InputModal changeInput={() => {}} text="Підтвердження паролю" value="" />
      <button className={styles.btnRegister}>Зареєструватися</button>
    </form>
  );
};

export default Register;
