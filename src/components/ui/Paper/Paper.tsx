import styles from "./Paper.module.css";
import clsx from "clsx";
import { FC, PropsWithChildren } from "react";

interface Props {
    className?: string;
}

export const Paper: FC<PropsWithChildren<Props>> = ({ className, children }) => {
    return <div className={clsx(styles.paper, className)}>{children}</div>;
};
