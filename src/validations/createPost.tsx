import * as yup from "yup";

const schemaCreatePost = yup.object({
  title: yup.string().required("Це поле обов'язкове!"),
  type: yup
    .string()
    .oneOf(["lookingForPlayers", "lookingForGroup"])
    .required("Тип обов'язковий!"),
  comment: yup
    .string()
    .nullable()
    .min(3, "Текст повинен бути не менше 3 символів!"),
  game: yup.string().nullable().required("Напишіть назву гри!"),
  socials: yup.lazy((value) => {
    if (value === null) {
      return yup.object().shape({
        discord: yup
          .string()
          .required("Заповніть хоча б одне з полів в соцмережах"),
        telegram: yup
          .string()
          .required("Заповніть хоча б одне з полів в соцмережах"),
      });
    }

    if (value && (value.discord || value.telegram)) {
      return yup.object({
        discord: yup.string().nullable().max(25, "Максимум 25 символів"),
        telegram: yup
          .string()
          .nullable()
          .matches(
            /^[A-Za-z0-9!-/:-@[-`{-~]+$/,
            "Тільки англійські букви та символи"
          ),
      });
    }

    return yup
      .object({
        discord: yup
          .string()
          .required("Заповніть хоча б одне з полів в соцмережах"),
        telegram: yup
          .string()
          .required("Заповніть хоча б одне з полів в соцмережах"),
      })
      .required("Заповніть хоча б одне з полів в соцмережах");
  }),
});

export default schemaCreatePost;
