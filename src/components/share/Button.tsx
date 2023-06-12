import { Link } from "react-router-dom";
import styles from "../../styles/button.module.css";
type ButtonProps = {
  onClick?: () => void;
  text: string;
  to?: string | undefined;
};
export const Button = ({ onClick, text,  to = '#' }: ButtonProps) => {
  return (
    <div className="">
      <Link
        target="_blank"
        to={to}
        onClick={onClick}
        className={styles.anim_btn}
      >
        <span>{text}</span>
      </Link>
    </div>
  );
};
