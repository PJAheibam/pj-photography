import { useEffect } from "react";

export function useTitleChanger(title) {
  useEffect(() => {
    window.document.title = title + " - Picturesque";
  }, []);
  return null;
}

export default useTitleChanger;
