import { Dispatch, SetStateAction, useEffect, useState } from "react";

export const useMode = (
  value = ""
): [string, Dispatch<SetStateAction<string>>] => {
  const [mode, setMode] = useState(value);

  useEffect(() => {
    try {
      const { mode } = JSON.parse(
        localStorage.getItem("searchQuery") as string
      );

      if (!!mode) {
        setMode(mode);
      }
    } catch (err) {
      //
    }
  }, []);

  return [mode, setMode];
};
