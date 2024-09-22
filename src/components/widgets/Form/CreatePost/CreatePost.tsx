import React, { useState } from "react";
import styles from "./CreatePost.module.scss";
import { useForm, useFormContext } from "react-hook-form";
import { IFormCreatePost } from "@interfaces/form";
import { yupResolver } from "@hookform/resolvers/yup";
import schemaCreatePost from "@validations/createPost";
import InputModal from "@components/shared/Input/InputModal/InputModal";
import TextArea from "@components/shared/Input/TextArea/TextArea";
import Radio from "@components/shared/Input/Radio/Radio";
import InputForTags from "@components/shared/Input/InputModal/InputForTags";
import { notify } from "@components/widgets/Tostify/Tostify";

const CreatePost = () => {
  const [tags, setTags] = useState<string[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormCreatePost>({ resolver: yupResolver(schemaCreatePost) });

  const handlehandleSaveTags = (value: string) => {
    notify("success", "успішно");
    setTags((prevState) => [...prevState, value]);
  };

  return (
    <form className={styles.FormCreatePost}>
      <div>
        <InputModal
          classN={"transparent"}
          text="Гра"
          hookForm={register("game")}
        />

        <TextArea
          placeholder={"Ваше повідомлення"}
          hookForm={register("comment")}
        />
        <div className={styles.boxRadio}>
          <Radio value="solo" hookForm={register("type")} text="Solo" />{" "}
          <Radio value="group" hookForm={register("type")} text="Group" />{" "}
        </div>
        <InputForTags
          classN={"transparent"}
          placeholder="Введіть теги для пошуку"
          handleSaveWord={handlehandleSaveTags}
        />
      </div>
      <p>{tags.join(",")}</p>
    </form>
  );
};

export default CreatePost;
