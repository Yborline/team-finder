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

export type typePost = "lookingForPlayers" | "lookingForGroup";

export interface ISocials {
  discord?: string | null;
  telegram?: string | null;
}

export interface IFormCreatePost {
  comment?: string | null;
  socials: ISocials;
  type: typePost;
  game: string;
  discordOrTelegram?: string;
}

export type SocialKeys = "discord" | "telegram";

export type FieldNames =
  | "type"
  | "comment"
  | "game"
  | "discordOrTelegram"
  | SocialKeys;

export type possibleClassN = "transparent";
