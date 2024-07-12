import { Dispatch } from "react";
import styles from "./index.module.css";

type ViewableCheckBoxProps = {
  onCheck: Dispatch<React.SetStateAction<boolean>>;
};

export const ViewableCheckBox = ({onCheck}: ViewableCheckBoxProps) => {
  return (
    <label className={styles.label}>
      <input className={styles.checkBox} type="checkbox" onClick={() => onCheck((prevState) => !prevState)} />
      表示する
    </label>
  );
};
