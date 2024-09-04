import { FC } from "react";
import styles from "./Register.module.scss";
import InputModal from "@components/shared/InputModal/InputModal";
import { IoCloseSharp } from "react-icons/io5";
import { IconContext } from "react-icons";
import { useForm, SubmitHandler } from "react-hook-form";
import schemaRegister from "@validations/register";
import { yupResolver } from "@hookform/resolvers/yup";
import ErrorText from "@components/shared/ErrorText/ErrorText";
import ModalBackdropAuth from "@components/shared/Modal/ModalBackdropAuth/ModalBackdropAuth";

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
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schemaRegister),
  });
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

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

export default Register;
