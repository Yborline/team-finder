import ErrorText from "@components/shared/ErrorText/ErrorText";
import InputModal from "@components/shared/InputModal/InputModal";
import ModalBackdropAuth from "@components/shared/Modal/ModalBackdropAuth/ModalBackdropAuth";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import schemaLogin from "validations/login";
import schemaRegister from "validations/register";

const Login = () => {
  interface IFormLogin {
    name: string;
    password: string;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormLogin>({ resolver: yupResolver(schemaLogin) });
  const onSubmit: SubmitHandler<IFormLogin> = (data) => console.log(data);

  return (
    <ModalBackdropAuth close={close}>
      <form className={styles.boxRegister} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.boxInputs}>
          <InputModal
            hookForm={register("name", { required: true, maxLength: 20 })}
            text="Нікнейм"
            aria-invalid={errors.name ? "true" : "false"}
          />

          <ErrorText error={errors.name} />

          <InputModal
            hookForm={register("email", { required: true, maxLength: 20 })}
            text="Електронна адреса"
            aria-invalid={errors.name ? "true" : "false"}
          />
          <ErrorText error={errors.email} />
          {/* {errors.email && <p role="alert">{errors.email?.message}</p>} */}
          <InputModal
            hookForm={register("password", { required: true, maxLength: 20 })}
            text="Пароль"
            type="password"
            aria-invalid={errors.password ? "true" : "false"}
            repeatPassword={true}
          />
          <ErrorText error={errors.password} />
          {/* {errors.password && <p role="alert">{errors.password?.message}</p>} */}
          <InputModal
            hookForm={register("repeatPassword", {
              required: true,
              maxLength: 20,
            })}
            text="Підтвердження паролю"
            type="password"
            aria-invalid={errors.repeatPassword ? "true" : "false"}
            repeatPassword={true}
          />
          <ErrorText error={errors.repeatPassword} />
        </div>
        <button type="submit" className={styles.btnRegister}>
          Зареєструватися
        </button>
      </form>
    </ModalBackdropAuth>
  );
};

export default Login;
