import { ReactNode } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
export type inputType = "text" | "number" | "password";

export interface IPropsInputModal {
  hookForm: UseFormRegisterReturn;
  text: string;
  type?: inputType;
}

export interface ButtonOtherAuth {
  onClick: () => void;
  text: string;
  children: ReactNode;
}

export interface ButtonDiscordGoogle {
  onClick: () => void;
  text: string;
}

export interface IFormInput {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
}
export interface IFormRegisterSend {
  name: string;
  email: string;
  password: string;
}

export interface IFormLogin {
  name: string;
  password: string;
}

type typePost = "lookingForPlayers" | "lookingForGroup";

export interface IFormCreatePost {
  type: typePost;
  comment?: string | null;
  // tags?: (string | undefined)[];
  game: string;
  discord: string;
  telegram: string;
}

export type possibleClassN = "transparent";
