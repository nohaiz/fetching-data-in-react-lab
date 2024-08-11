const BASE_URL = "https://swapi.dev/api/starships/";

const search = async (starships) => {
  try {
    const query = `?search=${starships}`;
    const res = await fetch(BASE_URL + query);
    if (!res.ok) {
      throw new Error(`Response status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const index = async () => {
  try {
    const res = await fetch(BASE_URL);
    if (!res.ok) {
      throw new Error(`Response status: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { search, index };
