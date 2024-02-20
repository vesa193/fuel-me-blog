import { ReactNode } from "react";
import style from "./Button.module.css";

type ButtonProps = {
    type?: "button" | "reset" | "submit";
    children: ReactNode;
    onClick?: () => void;
};

const Button = ({ type = "button", children, onClick }: ButtonProps) => {
    return (
        <button className={style.button} type={type} {...(onClick && { onClick })}>
            {children}
        </button>
    );
};

export default Button;
