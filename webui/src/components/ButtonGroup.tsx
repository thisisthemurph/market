import "./ButtonGroup.scss";

interface Props {
  children: JSX.Element[];
}

const ButtonGroup = ({ children }: Props) => {
  return <section className="button-group">{children}</section>;
};

export default ButtonGroup;
