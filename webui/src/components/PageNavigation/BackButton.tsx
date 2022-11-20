import NavigationButton from "../NavigationButton";
import "./PageNavigation.scss";

interface Props {
  path: string;
}

const BackButton = ({ path }: Props) => {
  return (
    <NavigationButton path={path} className="back-button">
      <svg
        role="image"
        focusable="false"
        width="25"
        height="25"
        aria-hidden="true"
        fill="white"
        viewBox="0 0 21 21"
      >
        <path d="m9 19 1.41-1.41L5.83 13H22v-2H5.83l4.59-4.59L9 5l-7 7 7 7z"></path>
      </svg>
    </NavigationButton>
  );
};

export default BackButton;
