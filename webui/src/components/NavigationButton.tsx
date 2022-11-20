import { useNavigate } from "react-router-dom";

interface Props {
  path: string;
  className: string;
  children: JSX.Element;
}

const NavigationButton = ({ path, children, className }: Props) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(path);
  };

  return (
    <button type="button" className={className} onClick={handleNavigate}>
      {children}
    </button>
  );
};

export default NavigationButton;
