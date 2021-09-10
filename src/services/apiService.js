import axios from "axios";

const POKE_API_URL_POKEMON = "https://pokeapi.co/api/v2/pokemon";

const POKE_API_URL_POKEMON_BY_COLOR =
  "https://pokeapi.co/api/v2/pokemon-color/";

const POKE_API_URL_POKEMON_BY_ID = "https://pokeapi.co/api/v2/pokemon/";

const POKE_API_URL_POKEMON_CHARACTERISTIC_BY_ID =
  "https://pokeapi.co/api/v2/characteristic/";

const POKE_API_URL_POKEMON_SPECIES_BY_ID =
  "https://pokeapi.co/api/v2/pokemon-species/";

export const API_LIMIT = 24;

export async function getPokemons(offset, limit = API_LIMIT) {
  return await axios.get(
    `${POKE_API_URL_POKEMON}?offset=${offset}&limit=${limit}`
  );
}

export async function getPokemonById(id) {
  return await axios.get(`${POKE_API_URL_POKEMON_BY_ID}${id}`);
}

export async function getPokemonCharacteristicById(id) {
  return await axios.get(`${POKE_API_URL_POKEMON_CHARACTERISTIC_BY_ID}${id}`);
}

export async function getPokemonSpeciesById(id) {
  return await axios.get(`${POKE_API_URL_POKEMON_SPECIES_BY_ID}${id}`);
}

export async function getPokemonColors() {
  return await axios.get(POKE_API_URL_POKEMON_BY_COLOR);
}
