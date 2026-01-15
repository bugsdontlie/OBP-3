import "../css/card.css";

const Card = ({ theme }) => {
  return (
    <>
      <div className={theme}>Current Theme: {theme}</div>
    </>
  );
}

export default Card;
