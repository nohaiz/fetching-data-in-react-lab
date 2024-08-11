import StarshipCard from "./StarshipCard";

const StarshipList = ({ list }) => {
  return (
    <>
      <h2>Starships</h2>
      <p>Number of results: {list.length}</p>
      <section>
        <ul>
          {list.map((starship, index) => (
            <li key={index}>
              <StarshipCard starship={starship} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default StarshipList;
