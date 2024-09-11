import ButtonAuth from "@components/shared/Button/ButtonAuth/ButtonAuth";
import ErrorText from "@components/shared/ErrorText/ErrorText";
import InputModal from "@components/shared/InputModal/InputModal";
import ModalBackdropAuth from "@components/shared/Modal/ModalBackdropAuth/ModalBackdropAuth";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./Login.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import schemaLogin from "@validations/login";
import { FC } from "react";
import AuthOtherBox from "@components/widgets/AuthOtherBox/AuthOtherBox";

interface IPropsLogin {
  close: () => void;
}

interface IFormLogin {
  name: string;
  password: string;
}
const Login: FC<IPropsLogin> = ({ close }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormLogin>({ resolver: yupResolver(schemaLogin) });
  const onSubmit: SubmitHandler<IFormLogin> = (data) => console.log(data);

  return (
    <ModalBackdropAuth close={close}>
      <form className={styles.boxLogin} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.boxInputs}>
          <InputModal
            hookForm={register("name", { required: true, maxLength: 20 })}
            text="Нікнейм"
            aria-invalid={errors.name ? "true" : "false"}
          />
          <ErrorText error={errors.name} />
          <InputModal
            hookForm={register("password", { required: true, maxLength: 20 })}
            text="Пароль"
            type="password"
            aria-invalid={errors.password ? "true" : "false"}
            repeatPassword={true}
          />
          <ErrorText error={errors.password} />
        </div>
        <ButtonAuth text="Увійти" type="submit" />
        <AuthOtherBox />
      </form>
    </ModalBackdropAuth>
  );
};

export default Login;
