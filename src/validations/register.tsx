import * as yup from "yup";

const schemaRegister = yup
  .object({
    email: yup
      .string()
      .email("Неправильний формат електронної пошти")
      .required("Електронна пошта обов’язкова"),

    password: yup
      .string()
      .min(8, "Пароль повинен містити щонайменше 8 символів")
      .required("Пароль обов’язковий"),

    repeatPassword: yup
      .string()
      .oneOf([yup.ref("password"), undefined], "Паролі не співпадають")
      .required("Підтвердження паролю обов’язкове"),

    name: yup
      .string()
      .matches(
        /^[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ'][a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ']*$/,
        "Ім'я може містити лише літери та апостроф"
      )
      .matches(/^[A-ZА-ЯЁІЇЄҐ]/, "Ім'я повинно починатися з великої літери")
      .min(2, "Ім’я повинно містити щонайменше 2 символи")
      .required("Ім’я обов’язкове"),
  })
  .required();

export default schemaRegister;
