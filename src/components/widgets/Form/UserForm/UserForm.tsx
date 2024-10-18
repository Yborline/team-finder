import { yupResolver } from "@hookform/resolvers/yup";
import schemaLogin from "@validations/login";
import schemaUser from "@validations/user";
import React from "react";
import { useForm } from "react-hook-form";

const UserForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schemaUser) });
  return <form></form>;
};

export default UserForm;
