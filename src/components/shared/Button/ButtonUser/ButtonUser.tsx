import { getUserName } from "@redux/auth/auth-selector";
import React from "react";
import { useSelector } from "react-redux";

const ButtonUser = () => {
  const nameUser = useSelector(getUserName);

  return <button>{nameUser}</button>;
};

export default ButtonUser;
