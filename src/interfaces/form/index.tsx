import { UseFormRegisterReturn } from "react-hook-form";
export type inputType = "text" | "number" | "password";

export interface IPropsInputModal {
  hookForm: UseFormRegisterReturn;
  text: string;
  type?: inputType;
}
