import { FC } from "react";
import styles from "./Register.module.scss";
import InputModal from "@components/shared/Input/InputModal/InputModal";
import { useForm, SubmitHandler } from "react-hook-form";
import schemaRegister from "@validations/register";
import { yupResolver } from "@hookform/resolvers/yup";
import ErrorText from "@components/shared/ErrorText/ErrorText";
import ModalBackdropAuth from "@components/shared/Modal/ModalBackdropAuth/ModalBackdropAuth";
import ButtonAuth from "@components/shared/Button/ButtonAuth/ButtonAuth";
import AuthOtherBox from "@components/widgets/AuthOtherBox/AuthOtherBox";
import authOperations from "@redux/auth/auth-operations";
import { useAppDispatch, AppDispatch } from "@interfaces/redux";
import { IFormInput } from "@interfaces/form";

interface IPropsRegister {
  close: () => void;
}

const Register: FC<IPropsRegister> = ({ close }) => {
  const dispatch = useAppDispatch<AppDispatch>();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schemaRegister),
  });
  const onSubmit: SubmitHandler<IFormInput> = (data: IFormInput) => {
    const { repeatPassword, ...filteredData } = data;
    console.log(repeatPassword);
    dispatch(authOperations.register(filteredData));
    reset();
    // fetch("http://95.135.51.126/api/users/register", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(filteredData),
    // })
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error("Network response was not ok");
    //     }
    //     return response.text(); // Use text() instead of json()
    //   })
    //   .then((text) => {
    //     return text ? JSON.parse(text) : {}; // Parse JSON only if text is not empty
    //   })
    //   .then((data) => {
    //     console.log("Success:", data);
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });
  };

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
        <ButtonAuth text="Зареєструватися" type="submit" />
        <AuthOtherBox />
      </form>
    </ModalBackdropAuth>
  );
};

export default Register;
