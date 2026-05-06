export default function RandomPokemon() {
  return (
    <div>
      <h1>{pokemonName}</h1>
      {imageUrl ? <img src={imageUrl} /> : null}
    </div>
  );
}
