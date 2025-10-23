import "./Label.css";
export type LabelProps = {
  htmlFor: string;
  name: string;
  className: string;
};

const Label: React.FC<LabelProps> = ({ className, htmlFor, name }) => {
  return (
    <label htmlFor={htmlFor} className={`label ${className}`}>
      {name}
    </label>
  );
};
export default Label;
