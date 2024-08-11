const StarshipCard = ({ starship }) => {
  return (
    <>
      <p>{starship.name}</p>
      <p>Class: {starship.starship_class}</p>
      <p>Manufacturer:{starship.manufacturer}</p>
      <p>Model: {starship.model}</p>
    </>
  );
};

export default StarshipCard;
