import { Character } from "../types/characters.type";

export const searchCharactersAPI = async (search: string): Promise<Character[]> => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${search}`);
    const data = await response.json();
    return data.results;
}

export const getAllCharacters = async (page: number): Promise<Character[]> => {
    console.log(page);
    
    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
    const data = await response.json();
    return data.results;
}