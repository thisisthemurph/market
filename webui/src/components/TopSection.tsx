import Button from "./Button";
import "./TopSection.scss";

const TopSection = () => {
  return (
    <section className="top-section container">
      <Button text="Sell"></Button>
      <Button text="Categories"></Button>
    </section>
  );
};

export default TopSection;
