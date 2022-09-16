import {Action} from '@reduxjs/toolkit'
import { Character } from './characters.type'

export interface InitialFetchOfCharactersAction extends Action {
    type: 'INITIAL_FETCH_OF_CHARACTERS',
    payload: number,
}

export interface InitialFetchOfCharactersSuccessAction extends Action {
    type: 'INITIAL_FETCH_OF_CHARACTERS_SUCCESS',
    payload: Character[],
}

export interface InitialFetchOfCharactersErrorAction extends Action {
    type: 'INITIAL_FETCH_OF_CHARACTERS_ERROR',
    payload: string,
}

export interface ChangePageAction extends Action {
    type: 'CHANGE_PAGE',
    payload: number,
}


export interface SearchCharactersAction extends Action {
    type: 'SEARCH_CHARACTERS',
    payload: string
}

export interface SearchCharactersSuccessAction extends Action {
    type: 'SEARCH_CHARACTERS_SUCCESS',
    payload: Character[]
}

export interface SearchCharactersErrorAction extends Action {
    type: 'SEARCH_CHARACTERS_ERROR',
    payload: string
}

export interface ResetSearchAction extends Action {
    type: 'RESET_SEARCH',
}

export interface AddToFavoritesAction extends Action {
    type: 'ADD_TO_FAVORITES',
    payload: []
}

/**
 * we export all actions in these object
 */
 export type CharactersActions = 
 InitialFetchOfCharactersAction 
 | InitialFetchOfCharactersSuccessAction
 | InitialFetchOfCharactersErrorAction
 | ChangePageAction
 | SearchCharactersAction 
 | SearchCharactersSuccessAction 
 | SearchCharactersErrorAction
 | ResetSearchAction
 | AddToFavoritesAction;