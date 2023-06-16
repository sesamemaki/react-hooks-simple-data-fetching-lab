// create your App component here
import React, { useState, useEffect } from "react";

function App() {
  const [dogs, setDogs] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setDogs(data.message);
        setIsLoaded(true);
      });
  }, []);

  // if the data hasn't been loaded, show a loading indicator
  if (!isLoaded) return <p>Loading...</p>;

  return <img src={dogs} alt="A Random Dog" />;
}

export default App;
