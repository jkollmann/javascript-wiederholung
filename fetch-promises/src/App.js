import { useEffect, useState } from 'react';
import './App.css';

// PAGINATION

// Erstelle eine Liste von Pokemon Namen
// Am Anfang sollen nur 10 Pokemon angezeigt werden
// Beim klicken von "Show More" sollen 10 weitere Pokemon angezeigt werden


// Search

// Implementiere eine Suche, die schon beim Tippen die Liste nach dem Pokemonnamen filtert

function App() {
  const [offset, setOffset] = useState(0);
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`)
  }, []);

  return (<div>
    <div>{pokemonList.map((item, i) => <p key={i}>{item.name}</p>)}</div>
    <button>Show more</button>
    <input type="text" placeholder="search"></input>
  </div>);
}

export default App;
