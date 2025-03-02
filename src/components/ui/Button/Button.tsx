import styles from "./Button.module.css";
import { FC, PropsWithChildren } from "react";

interface Props {
    disabled?: boolean;
}

export const Button: FC<PropsWithChildren<Props>> = ({ disabled, children }) => {
    return (
        <button className={styles.button} disabled={disabled}>
            {children}
        </button>
    );
};
