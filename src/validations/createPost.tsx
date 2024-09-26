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
    game: yup.string().nullable().required("Напишіть назву гри!"),
    discord: yup
      .string()
      .nullable()
      .matches(/^[0-9]+$/, "Тільки цифри")
      .min(18, "Повинно бути рівно 18 чисел")
      .max(18, "Повинно бути рівно 18 чисел"),

    telegram: yup
      .string()
      .nullable()
      .matches(
        /^[A-Za-z0-9!-/:-@[-`{-~]+$/,
        "Тільки англійські букви та символи, крім пробілу"
      ),
  })
  .transform((originalValue) => {
    // Установка значения на null, если не введено
    return {
      ...originalValue,
      discord: originalValue.discord || null,
      telegram: originalValue.telegram || null,
    };
  })
  .test(
    "discordOrTelegram",
    "Заповніть хоча б одне поле: Discord або Telegram",
    function (value) {
      const { discord, telegram } = value;
      // Проверка на пустоту обоих полей
      if (!discord && !telegram) {
        return this.createError({ path: "discordOrTelegram" });
      }
      return true; // Валидация успешна
    }
  );

export default schemaCreatePost;
