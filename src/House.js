const House = (props) => {
  const house = props.house;

  return (
    <section>
      <h3>{house.name}</h3>
      <img src={house.main_image} alt={house.name} />
    </section>
  );
};

export default House;
