import { ActionCreator, ThunkAction} from '@reduxjs/toolkit'
import { getAllCharacters, searchCharactersAPI } from '../../service/service'
import { AddToFavoritesAction, ChangePageAction, CharactersActions, InitialFetchOfCharactersAction, InitialFetchOfCharactersErrorAction, InitialFetchOfCharactersSuccessAction, ResetSearchAction, SearchCharactersAction, SearchCharactersErrorAction, SearchCharactersSuccessAction } from '../../types/characters.actions'
import { Character } from '../../types/characters.type'
import { GlobalState } from '../store'

const initialFetchCharacters: ActionCreator<InitialFetchOfCharactersAction> = (page: number) => {
    return {
        type: 'INITIAL_FETCH_OF_CHARACTERS',
        payload: page
    }
}

const initialFetchCharactersSuccess: ActionCreator<InitialFetchOfCharactersSuccessAction> = (characters: Character[]) => {
    return {
        type: 'INITIAL_FETCH_OF_CHARACTERS_SUCCESS',
        payload: characters
    }
}

const initialFetchCharactersError: ActionCreator<InitialFetchOfCharactersErrorAction> = (error: string) => {
    return {
        type: 'INITIAL_FETCH_OF_CHARACTERS_ERROR',
        payload: error
    }
}

export const changePage: ActionCreator<ChangePageAction> = (page: number) => {
    return {
        type: 'CHANGE_PAGE',
        payload: page
    }
}

const searchCharacters: ActionCreator<SearchCharactersAction> = (search: string) => {
    return {
        type: 'SEARCH_CHARACTERS',
        payload: search
    }
}

const searchCharactersSuccess: ActionCreator<SearchCharactersSuccessAction> = (characters: Character[]) => {
    return {
        type: 'SEARCH_CHARACTERS_SUCCESS',
        payload: characters
    }
}

const searchCharactersError: ActionCreator<SearchCharactersErrorAction> = (error: string) => {
    return {
        type: 'SEARCH_CHARACTERS_ERROR',
        payload: error
    }
}

export const resetSearch: ActionCreator<ResetSearchAction> = () => {
    return {
        type: 'RESET_SEARCH',
    }
}

export const addCharacterToFavorites: ActionCreator<AddToFavoritesAction> = (character: []) => {
    return {
        type: 'ADD_TO_FAVORITES',
        payload: character
    }
}

interface SearchCharactersThunkAction extends ThunkAction<void, GlobalState, unknown, CharactersActions>{};

export const fetchCharactersThunk = (page: number): SearchCharactersThunkAction => {
    return async (dispatch, getState) => {
        dispatch(initialFetchCharacters(page))
        try {
            const characters = await getAllCharacters(page);
            dispatch(initialFetchCharactersSuccess(characters))
        } catch (error) {
            dispatch(initialFetchCharactersError(error));
        }
    }
}

export const searchCharactersThunk = (search: string): SearchCharactersThunkAction => {
    return async (dispatch, getState) => {
        dispatch(searchCharacters(search));
        try {
            const characters = await searchCharactersAPI(search);
            dispatch(searchCharactersSuccess(characters))
        } catch (error) {
            dispatch(searchCharactersError(error));
        }
    }
}