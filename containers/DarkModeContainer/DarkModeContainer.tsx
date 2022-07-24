import React, { FC, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { toogleDarkMode, selectDarkmodeState } from "../../store/darkmode/darkmode";
import SwitchDarkMode from "../../components/SwitchDarkMode/SwitchDarkMode";

export interface DarkModeContainerProps {
  className?: string;
}

const DarkModeContainer: FC<DarkModeContainerProps> = ({ className = "" }) => {
  const darkmodeState = useAppSelector(selectDarkmodeState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const root = document.querySelector("Html");
    if (!root) return;
    if (darkmodeState) {
      !root.classList.contains("dark") && root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkmodeState]);

  return (
    <SwitchDarkMode
      onClick={() => dispatch(toogleDarkMode())}
      isDarkMode={darkmodeState}
      className={className}
    />
  );
};

export default DarkModeContainer;
