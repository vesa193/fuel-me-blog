import style from "./Card.module.css";
import crossIcon from "../../assets/icons/times-icon.svg";

const Card = () => {
    return (
        <div className={style.card}>
            <div className={style["card-title"]}>
                <h4>About me</h4>
                <img src={crossIcon} alt="cross-icon" />
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. In quis placeat est libero? Rem neque quisquam
                ab incidunt magnam nemo nobis reiciendis, tenetur nesciunt explicabo ad reprehenderit perferendis id
                temporibus.
            </p>
            <small>Posted by Sofia</small>
        </div>
    );
};

export default Card;
