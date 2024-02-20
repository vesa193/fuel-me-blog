import style from "./Card.module.css";
import crossIcon from "../../assets/icons/times-icon.svg";
import { Blog } from "../../App";

type CardProps = Blog & { onRemove: (id: string) => void };

const Card = ({ id, title, text, author, onRemove }: CardProps) => {
    return (
        <div className={style.card}>
            <div className={style["card-title"]}>
                <h4>{title}</h4>
                <img src={crossIcon} alt="cross-icon" onClick={() => onRemove(id)} />
            </div>
            <p>{text}</p>
            <small>Posted by {author}</small>
        </div>
    );
};

export default Card;
