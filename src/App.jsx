import * as starshipService from "./services/starshipService";
import StarshipList from "./components/StarshipList";
import StarshipSearch from "./components/StarshipSearch";
import { useEffect, useState } from "react";
import "/src/App.css";

const App = () => {
  const [list, setList] = useState([]);

  const getStarships = async () => {
    const data = await starshipService.index();
    setList(data.results);
  };

  const getSearch = async (starships) => {
    const data = await starshipService.search(starships);
    setList(data.results);
  };

  useEffect(() => {
    getStarships();
  }, []);

  return (
    <>
      <main>
        <h1>Star Wars API</h1>
        <section>
          <StarshipSearch getSearch={getSearch} />
          <StarshipList list={list} />
        </section>
      </main>
      ;
    </>
  );
};

export default App;
