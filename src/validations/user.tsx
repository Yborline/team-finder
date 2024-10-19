import * as yup from "yup";

const schemaUser = yup.object({
  name: yup.string(),
  email: yup.string().email(),
  discordUsername: yup.string().max(25, "Максимум 25 символів").nullable(),
  telegramLink: yup
    .string()
    .nullable()
    .matches(
      /^[A-Za-z0-9!-/:-@[-`{-~]*$/,
      "Тільки англійські букви та символи"
    ),
});

export default schemaUser;
