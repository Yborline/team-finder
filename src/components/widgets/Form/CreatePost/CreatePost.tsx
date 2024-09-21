import React from "react";
import styles from "./CreatePost.module.scss";
import { useForm } from "react-hook-form";
import { IFormCreatePost } from "@interfaces/form";
import { yupResolver } from "@hookform/resolvers/yup";
import schemaCreatePost from "@validations/createPost";
import InputModal from "@components/shared/InputModal/InputModal";
import TextArea from "@components/shared/Input/TextArea/TextArea";

const CreatePost = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormCreatePost>({ resolver: yupResolver(schemaCreatePost) });

  return (
    <form className={styles.FormCreatePost}>
      <div>
        <InputModal
          classN={"transparent"}
          text="Гра"
          hookForm={register("game")}
        />

        <InputModal
          classN={"transparent"}
          text="Гра"
          hookForm={register("game")}
        />
        <TextArea
          placeholder={"Ваше повідомлення"}
          hookForm={register("comment")}
        />
        <div>
          <label>
            <input type="radio" value="solo" {...register("type")} />
            Solo
          </label>
          <label>
            <input type="radio" value="group" {...register("type")} />
            Group
          </label>
        </div>
      </div>
    </form>
  );
};

export default CreatePost;
