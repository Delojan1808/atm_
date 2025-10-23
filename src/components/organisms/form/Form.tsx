import "./Form.css";
import Button, { type ButtonProps } from "../../atoms/button/Button";
import InputLabel, { type InputLabelProps } from "../../molecules/inputLabel/InputLabel";

type FormProps = {
  title: string;
  inputFields: InputLabelProps[];
  button: ButtonProps;
};

const Form: React.FC<FormProps> = ({ button, inputFields, title }) => {
  return (
    <div className="form">
      <div><h1>{title}</h1></div>
      <div style={{display:'flex',flexDirection:'column'}}>
        {inputFields.map((c, index) => (
          <div key={index} style={{display:'flex'}}>
            <InputLabel label={c.label} input={c.input} />
          </div>
        ))}
      </div>
      <div style={{display:'flex'}}>
        <Button
          type={"button"}
          name={button.name}
          className={button.className}
          onClick={button.onClick}
        />
      </div>
    </div>
  );
};
export default Form;
