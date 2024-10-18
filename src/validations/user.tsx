import * as yup from "yup";

const schemaUser = yup.object({
  name: yup.string(),
  email: yup.string().email(),
  discord: yup.string().nullable().max(25, "Максимум 25 символів"),
  telegram: yup
    .string()

    .matches(
      /^[A-Za-z0-9!-/:-@[-`{-~]+$/,
      "Тільки англійські букви та символи"
    ),
});

export default schemaUser;
