import React, { useState } from "react";
import styles from "./CreatePost.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { IFormCreatePost } from "@interfaces/form";
import { yupResolver } from "@hookform/resolvers/yup";
import schemaCreatePost from "@validations/createPost";
import InputModal from "@components/shared/Input/InputModal/InputModal";
import TextArea from "@components/shared/Input/TextArea/TextArea";
import Radio from "@components/shared/Input/Radio/Radio";
import InputForTags from "@components/shared/Input/InputModal/InputForTags";
import { notify } from "@components/widgets/Tostify/Tostify";
import AnimatedButton from "@components/shared/Button/AnimatedButton/AnimatedButton";
import ErrorText from "@components/shared/ErrorText/ErrorText";
import SocialsButton from "@components/shared/Button/SocialsButton/SocialsButton";
import imgDiscord from "@assets/img/auth/discord.png";
import imgTelegram from "@assets/img/socials/telegram.png";

const maxTegs = 10;

const CreatePost = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [inputCurrent, setInputCurrent] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormCreatePost>({
    resolver: yupResolver(schemaCreatePost),
    defaultValues: {
      game: "",
      comment: null,
      type: "lookingForPlayers",
      discord: "",
      telegram: "",
    },
  });

  const handlehandleSaveTags = (value: string) => {
    if (tags.length >= maxTegs) {
      notify("error", `Максимальна кількість тегів - ${maxTegs}шт`);
      return;
    }
    setTags((prevState) => [...prevState, value]);
  };

  const handleSubmitCreatePost: SubmitHandler<IFormCreatePost> = (values) => {
    console.log(values);
    console.log(tags);
    reset();
    notify("success", "Ваш пост відправлено");
  };
  const handleOpenSocials = (value: string) => {
    if (value === inputCurrent) setInputCurrent("");
    else setInputCurrent(value);
  };
  console.log(inputCurrent);

  return (
    <form
      onSubmit={handleSubmit(handleSubmitCreatePost)}
      className={styles.FormCreatePost}
    >
      <InputModal
        classN={"transparent"}
        text="Гра"
        hookForm={register("game")}
      />
      <ErrorText error={errors.game} />

      <TextArea
        placeholder={"Ваше повідомлення"}
        hookForm={register("comment")}
      />
      <ErrorText error={errors.comment} />
      <div className={styles.boxRadio}>
        <Radio
          value="lookingForPlayers"
          hookForm={register("type")}
          text="Пошук гравця"
        />{" "}
        <Radio
          value="lookingForGroup"
          hookForm={register("type")}
          text="Пошук команди"
        />{" "}
      </div>
      <ErrorText error={errors.type} />
      <div className={styles.boxSocials}>
        <SocialsButton
          onClick={() => handleOpenSocials("telegram")}
          text="Telegram"
          img={imgTelegram}
        />
        <SocialsButton
          onClick={() => handleOpenSocials("discord")}
          text="Discord"
          img={imgDiscord}
        />
      </div>
      {inputCurrent === "telegram" && (
        <>
          <InputModal
            classN={"transparent"}
            text="Посилання на телеграм"
            hookForm={register("telegram")}
          />
          <ErrorText error={errors.telegram} />
        </>
      )}
      {inputCurrent === "discord" && (
        <>
          <InputModal
            classN={"transparent"}
            text="Посилання на діскорд"
            hookForm={register("discord")}
          />
          <ErrorText error={errors.discord} />
        </>
      )}

      <InputForTags
        classN={"transparent"}
        placeholder="Введіть теги для пошуку"
        handleSaveWord={handlehandleSaveTags}
      />
      {tags.length > 0 && (
        <>
          <p className={styles.descTags}>Ваші додані теги:</p>
          <p className={styles.listTags}>{tags.join(", ")}</p>
        </>
      )}

      <AnimatedButton type="submit" text="Відправити" />
    </form>
  );
};

export default CreatePost;
