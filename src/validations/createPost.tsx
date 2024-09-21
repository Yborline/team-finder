import * as yup from "yup";

const schemaCreatePost = yup.object({
  type: yup.string().oneOf(["solo", "group"]).required("Тип обов'язковий!"),
  comment: yup.string().min(3, "Текс повинен бути не менше 3 символів!"),
  tags: yup.array().of(yup.string()),
  game: yup.string().required("Напишіть назву гри!"),
});

export default schemaCreatePost;
