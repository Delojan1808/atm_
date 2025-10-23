import "./Div.css";

type DivProps = {
  className?: string;
  children: React.ReactNode;
};

const Div: React.FC<DivProps> = ({ className, children }) => {
  return <div className={`Div ${className}`}>{children}</div>;
};

export default Div;
