import { FC, useEffect, useState } from 'react';
import { TypedUseSelectorHook, useDispatch } from 'react-redux';
import { searchCharactersAPI } from '../../service/service';
import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';
import { GlobalState, useSelector as useReduxSelector } from '../../redux/store';
import { Character } from '../../types/characters.type'


/**
 * Grilla de personajes para la pagina de inicio
 * 
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 * 
 * 
 * @returns un JSX element 
 */
const GrillaPersonajes:FC = () => {

    return (
        <div className="grilla-personajes">
            <TarjetaPersonaje />
        </div>
    )
}
 
export default GrillaPersonajes;