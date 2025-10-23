import Input, { type InputProps } from "../../atoms/input/Input";
import Label, { type LabelProps } from "../../atoms/label/Label";
import "./InputLabel.css";


export type InputLabelProps = {
  label: LabelProps;
  input: InputProps;
};
const InputLabel: React.FC<InputLabelProps> = ({ label, input }) => {
  return (
    <div className="InputLabel">
      <Label
        htmlFor={label.htmlFor}
        name={label.name}
        className={`label ${label.className}`}
      />
      <Input
        value={input.value}
        placeholder={input.placeholder}
        onChange={input.onChange}
        className={`input ${input.className}`}
        id={input.id}
        type={input.type}
        min={input.min}
      />
    </div>
  );
};
export default InputLabel;
