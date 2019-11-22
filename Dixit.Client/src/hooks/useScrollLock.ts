import { useEffect } from "react";
export const useScrollLock = (toggle: boolean) => {
  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "relative";
    } else {
      document.body.style.overflow = "unset";
      document.body.style.position = "unset";
    }
  }, [toggle]);
};
