import { Character, Episode } from "../types/characters.type";

/**
 * It takes a string as an argument, makes a request to the Rick and Morty API, and returns an array of
 * characters.
 * 
 * We use the await keyword to wait for the response from the API.
 * 
 * We use the await keyword to wait for the response to be converted to JSON.
 * 
 * We return the results from the JSON response.
 * 
 * We can use this function in our React app like this:
 * @param {string} search - string - The search term to use to find characters
 * @returns An array of characters.
 */
export const searchCharactersAPI = async (search: string): Promise<Character[]> => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${search}`);
    const data = await response.json();
    return data.results;
}

/**
 * It takes a page number as an argument, fetches the data from the API, and returns an array of
 * characters
 * @param {number} page - number - The page number you want to get.
 * @returns An array of characters
 */
export const getAllCharacters = async (page: number): Promise<Character[]> => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
    const data = await response.json();
    return data.results;
}

/**
 * It takes a number as an argument, makes a request to the Rick and Morty API, and returns a character
 * object
 * @param {number} characterId - number
 * @returns A promise that resolves to a character object.
 */
export const getCharacterById = async (characterId: number): Promise<Character> => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${characterId}`);
    const data = await response.json();
    return data;
}

/**
 * It takes an id as a parameter, fetches the data from the API, and returns the data as a promise
 * @param {string | undefined} id - string | undefined
 * @returns An object with the following properties:
 * id: number
 * name: string
 * air_date: string
 * episode: string
 * characters: string[]
 * url: string
 * created: string
 */
export const getEpisodes = async (id: string | undefined): Promise<Episode> => {
    const response = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);
    const data = await response.json();
    return data;
}