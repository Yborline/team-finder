import * as yup from "yup";

const schemaCreatePost = yup
  .object({
    type: yup
      .string()
      .oneOf(["lookingForPlayers", "lookingForGroup"])
      .required("Тип обов'язковий!"),
    comment: yup
      .string()
      .nullable()
      .min(3, "Текст повинен бути не менше 3 символів!"),
    // tags: yup.array().of(yup.string()),
    game: yup.string().required("Напишіть назву гри!"),
    discord: yup.string().required("Напишіть назву гри!"),
    telegram: yup.string().required("Напишіть назву гри!"),
  })
  .test(
    "discordOrTelegram",
    "Заповніть хоча б одне поле: Discord або Telegram",
    function (value) {
      const { discord, telegram } = value;
      return !!discord || !!telegram;
    }
  );

export default schemaCreatePost;
