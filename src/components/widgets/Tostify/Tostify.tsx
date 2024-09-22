import { toast, Flip } from "react-toastify";
type typeN = "success" | "error";

export const notify = (typeN: typeN = "success", text: string) => {
  toast[typeN](text, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Flip,
  });
};
