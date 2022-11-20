type ButtonType = "standard" | "primary";

interface Props {
  text?: string;
  type?: ButtonType;
  click?: () => void;
  children?: JSX.Element;
}

const Button = ({ type, text, children, click }: Props) => {
  const buildClassName = (type: ButtonType | undefined): string => {
    return type && type !== "standard" ? `btn ${type}` : "btn";
  };

  return <button className={buildClassName(type)}>{children ? children : text}</button>;
};

export default Button;
