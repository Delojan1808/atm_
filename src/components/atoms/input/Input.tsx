import "./Input.css";

export type InputProps = {
  placeholder?: string;
  onChange?: (e: any) => void;
  className: string;
  id: string;
  value:string;
  type: "text" | "number" | "password";
  min?:number;
};

const Input: React.FC<InputProps> = ({
  className,
  id,
  value,
  min,
  onChange,
  placeholder,
  type = "number",
}) => {
  return (
    <input
      placeholder={placeholder}
      onChange={onChange}
      className={`input ${className}`}
      value={value}
      type={type}
      id={id}
      min={min}
    />
  );
};
export default Input;
