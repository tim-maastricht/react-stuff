import { useState, useEffect } from 'react'



export default function RandomPokemon() {
  const [pokemonName, setPokemonName] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    console.log("hello from randopokemon")
    
    // async/await must happen inside hook
    async function getRandomPokemon(){
      // generate random number
      let randomPokemonId = Math.floor(Math.random() * 1025 + 1)
      //make fetch req using random number
      let response = await fetch("https://pokeapi.co/api/v2/pokemon/" + randomPokemonId);
      // save result
      let responseBody = await response.json();
      // pass the result into setters
      setPokemonName(responseBody.name);
      setImageUrl(responseBody.sprites.front_default);
    }
    getRandomPokemon();
    // return in a useEffect = componentWillUnmount
    return (() => {
      console.log("Component will unmount")
    })

    // empty dependency array = componentDidMount
  }, []);

  // useEffect(() => { // this is an example of a dependency array changing the pokemon
  //   console.log("pokemon name changed!" + pokemonName)
  //   // putting var into depArr turns useEffect into componentDidUpdate
  // }, [pokemonName])

  return (
    <div>
      <h1>{pokemonName}</h1>
      {imageUrl ? <img src={imageUrl} /> : null}
    </div>
  );
}
