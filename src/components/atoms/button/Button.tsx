import "./Button.css";
export type ButtonProps = {
  type: "button" | "submit" | "reset";
  name: React.ReactNode;
  className: string;
  onClick: () => void;
};
const Button: React.FC<ButtonProps> = ({ type, className, name, onClick }) => {
  return (
    <button type={type} className={`button ${className}`} onClick={onClick}>
      {name}
    </button>
  );
};
export default Button;
