function Card({ child = "default child", name }) {
  return (
    <>
      {child}, {name}
    </>
  );
}

export default Card;
