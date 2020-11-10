type Pokemon = {
  name: string;
  sprites: {
    front_default: string
  };
}

type Search = {
  text: string
}

// type SearchBarText = {
//   text: string
// }

type SearchRequest = (searchRequest: string) => void
interface AllPokemon {
  results: { allPokemon: string[] };
}
