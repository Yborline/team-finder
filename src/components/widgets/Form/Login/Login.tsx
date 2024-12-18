import ButtonAuth from "@components/shared/Button/ButtonAuth/ButtonAuth";
import ErrorText from "@components/shared/ErrorText/ErrorText";
import InputModal from "@components/shared/Input/InputModal/InputModal";
import ModalBackdropAuth from "@components/shared/Modal/ModalBackdropAuth/ModalBackdropAuth";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./Login.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import schemaLogin from "@validations/login";
import { FC } from "react";
import AuthOtherBox from "@components/widgets/AuthOtherBox/AuthOtherBox";
import { AppDispatch, useAppDispatch } from "@interfaces/redux";
import authOperations from "@redux/auth/auth-operations";
import { IFormLogin } from "@interfaces/form";
import { useSelector } from "react-redux";
import { getLoading } from "@redux/auth/auth-selector";
import Loader from "@components/shared/Loader/Loader";
import { useTranslation } from "react-i18next";

interface IPropsLogin {
  close: () => void;
}

const Login: FC<IPropsLogin> = ({ close }) => {
  const { t } = useTranslation();
  const loadingUser = useSelector(getLoading);
  const dispatch = useAppDispatch<AppDispatch>();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormLogin>({ resolver: yupResolver(schemaLogin) });
  const onSubmit: SubmitHandler<IFormLogin> = (data: IFormLogin) => {
    console.log(data);
    dispatch(authOperations.logIn(data));
    reset();
  };

  return (
    <ModalBackdropAuth close={close}>
      {loadingUser ? (
        <Loader />
      ) : (
        <form className={styles.boxLogin} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.boxInputs}>
            <InputModal
              hookForm={register("name", { required: true, maxLength: 20 })}
              text={t("auth.uniqName")}
              // aria-invalid={errors.name ? "true" : "false"}
            />
            <ErrorText error={errors.name} />
            <InputModal
              hookForm={register("password", { required: true, maxLength: 20 })}
              text={t("auth.password")}
              type="password"
              // aria-invalid={errors.password ? "true" : "false"}
              repeatPassword={true}
            />
            <ErrorText error={errors.password} />
          </div>
          <ButtonAuth text={t("header.login")} type="submit" />
          <AuthOtherBox />
        </form>
      )}
    </ModalBackdropAuth>
  );
};

export default Login;
