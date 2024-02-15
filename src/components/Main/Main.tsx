import { Pane, majorScale } from "evergreen-ui";
import { ReactNode } from "react";
import style from "./main.module.scss";

interface MainProps {
  children: ReactNode;
}

export default function Main({ children }: MainProps) {
  return (
    <Pane
      className={style.main}
      is="main"
      margin="auto"
      padding={majorScale(2)}
      display="flex"
      flexDirection="column"
      gap={majorScale(3)}
    >
      {children}
    </Pane>
  );
}
