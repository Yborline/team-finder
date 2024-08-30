import React, { FC } from "react";
import styles from "./Register.module.scss";
import InputModal from "@components/shared/InputModal/InputModal";
import { IoCloseSharp } from "react-icons/io5";
import { IconContext } from "react-icons";
import { useForm, SubmitHandler } from "react-hook-form";
import PasswordInput from "@components/shared/InputModal/PasswordInput/PasswordInput";

interface IPropsRegister {
  close: () => void;
}
interface IFormInput {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
}

const Register: FC<IPropsRegister> = ({ close }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.boxRegister}>
      <IconContext.Provider value={{ className: styles.closeIcon }}>
        <IoCloseSharp onClick={close} />
      </IconContext.Provider>
      <div className={styles.boxInputs}>
        <InputModal
          hookForm={register("name", { required: true, maxLength: 20 })}
          text="Нікнейм"
          aria-invalid={errors.name ? "true" : "false"}
        />
        <p
          className={`${styles.errorP} ${
            errors.name?.type === "required" ? styles.show : ""
          }`}
          role="alert"
        >
          First name is required
        </p>

        <InputModal
          hookForm={register("email", { required: true, maxLength: 20 })}
          text="Електронна адреса"
          aria-invalid={errors.name ? "true" : "false"}
        />
        {errors.email?.type === "required" && (
          <p role="alert">First name is required</p>
        )}
        <div className={styles.boxPassword}>
          <PasswordInput
            hookForm={register("password", { required: true, maxLength: 20 })}
            text="Пароль"
            type="password"
            aria-invalid={errors.password ? "true" : "false"}
          />
          {errors.password?.type === "required" && (
            <p role="alert">First name is required</p>
          )}
          <PasswordInput
            hookForm={register("repeatPassword", {
              required: true,
              maxLength: 20,
            })}
            text="Підтвердження паролю"
            type="password"
            aria-invalid={errors.repeatPassword ? "true" : "false"}
          />
          {errors.repeatPassword?.type === "required" && (
            <p role="alert">First name is required</p>
          )}
        </div>
      </div>
      <button type="submit" className={styles.btnRegister}>
        Зареєструватися
      </button>
    </form>
  );
};

export default Register;
