import { toast, Flip } from "react-toastify";
type typeN = "success" | "error" | "info";

export const notify = (typeN: typeN = "success", text: string) => {
  const screenWidth = window.innerWidth;
  let position: "top-center" | "bottom-center" = "top-center";

  if (screenWidth < 768) {
    position = "bottom-center"; // Позиція для мобільних
  }
  toast[typeN](text, {
    position,
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Flip,
    // className: styles.notify,
  });
};
