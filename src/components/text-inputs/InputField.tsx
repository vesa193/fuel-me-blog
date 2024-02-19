import { ChangeEvent } from "react";
import style from "./InputField.module.css";

type InputFieldProps = {
    name: string;
    value: string;
    type?: string;
    label: string;
    onChange: (inputValue: string) => void;
};

const InputField = ({ type = "text", name, label, value, onChange }: InputFieldProps) => {
    return (
        <div className={style["input-field"]}>
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                value={value}
                onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(event.target.value)}
            />
        </div>
    );
};

export default InputField;
