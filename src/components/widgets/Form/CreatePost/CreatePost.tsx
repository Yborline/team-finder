import { useState } from "react";
import styles from "./CreatePost.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { IFormCreatePost, SocialKeys } from "@interfaces/form";
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
import { useAppDispatch } from "@interfaces/redux";
import postsOperations from "@redux/posts/posts-operations";
import { useTranslation } from "react-i18next";

const maxTegs = 10;

const CreatePost = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [inputCurrent, setInputCurrent] = useState<SocialKeys | "">("");
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm<IFormCreatePost>({
    resolver: yupResolver(schemaCreatePost),
    defaultValues: {
      title: "",
      game: "",
      comment: null,
      type: "lookingForPlayers",
      socials: {
        discord: null,
        telegram: null,
      },
    },
  });

  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { value } = e.target;
  //   const name = e.target.name as FieldNames;
  //   clearErrors("discordOrTelegram"); // Очистить ошибку при вводе
  //   setValue(name, value ? value : null); // Установить новое значение
  // };

  const handlehandleSaveTags = (value: string) => {
    if (tags.length >= maxTegs) {
      notify("error", t("createPost.maxTagsError", { count: maxTegs }));
      return;
    }
    setTags((prevState) => [...prevState, value]);
  };

  const handleSubmitCreatePost: SubmitHandler<IFormCreatePost> = (values) => {
    const newObj = { ...values, tags };
    console.log(newObj);
    dispatch(postsOperations.addPost(newObj));
    setTags([]);
    reset();
  };
  const handleOpenSocials = (value: SocialKeys) => {
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
        text={t("createPost.title")}
        hookForm={register("title")}
      />
      <ErrorText error={errors.title} />
      <InputModal
        classN={"transparent"}
        text={t("createPost.game")}
        hookForm={register("game")}
      />
      <ErrorText error={errors.game} />
      <TextArea
        placeholder={t("createPost.yourMassage")}
        hookForm={register("comment")}
      />
      <ErrorText error={errors.comment} />
      <div className={styles.boxRadio}>
        <Radio
          value="lookingForPlayers"
          hookForm={register("type")}
          text={t("createPost.playerSearch")}
        />{" "}
        <Radio
          value="lookingForGroup"
          hookForm={register("type")}
          text={t("createPost.teamSearch")}
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
            // onChange={handleInputChange}
            classN={"transparent"}
            text={t("createPost.nicknameTelegram")}
            hookForm={register("socials.telegram")}
          />
          {/* <ErrorText error={errors.socials?.telegram} /> */}
        </>
      )}
      {inputCurrent === "discord" && (
        <>
          <InputModal
            // onChange={handleInputChange}
            classN={"transparent"}
            text={t("createPost.discordLink")}
            hookForm={register("socials.discord")}
            type="text"
          />
          {/* <ErrorText error={errors.socials?.discord} /> */}
        </>
      )}

      {/* {
        (!discordValue || !telegramValue) && inputCurrent === "" ? (
          <ErrorText error={errors.socials?.discord} />
        ) : inputCurrent && errors.socials?.[inputCurrent] ? (
          <ErrorText error={errors.socials[inputCurrent]} />
        ) : null // Or handle the case when there's no error for the inputCurrent
      } */}
      <InputForTags
        classN={"transparent"}
        placeholder={t("createPost.tagsSearch")}
        handleSaveWord={handlehandleSaveTags}
      />
      {tags.length > 0 && (
        <>
          <p className={styles.descTags}>{t("createPost.addedTags")}:</p>
          <p className={styles.listTags}>{tags.join(", ")}</p>
        </>
      )}
      <AnimatedButton type="submit" text={t("createPost.send")} />
    </form>
  );
};

export default CreatePost;
