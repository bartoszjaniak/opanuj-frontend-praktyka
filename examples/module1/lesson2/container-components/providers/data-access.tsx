import { Character } from "../types/Character";

export const fetchData = (name: string, gender: string): Promise<Character[]> => fetch(
    `https://rickandmortyapi.com/api/character/?name=${name}&gender=${gender}`
)
    .then((response) => response.json())
    .then((data) => data.results || [])
    .catch((error) => console.error('Error fetching data:', error));