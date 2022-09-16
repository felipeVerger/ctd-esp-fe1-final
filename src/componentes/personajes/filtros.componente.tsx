import {FC} from 'react';
import { searchCharactersThunk } from '../../redux/actions/characters.actions';
import { TypedUseSelectorHook, useDispatch, useSelector as useReduxSelector } from 'react-redux';

import './filtros.css';
import { GlobalState } from '../../redux/store';

export const useSelector: TypedUseSelectorHook<GlobalState> = useReduxSelector;

const Filtros:FC = () => {

    const { search } = useSelector(state => state.characters);
    const dispatch = useDispatch();

    return <div className="filtros">
        <label htmlFor="nombre">Filtrar por nombre:</label>
        <input 
            type="text" 
            placeholder="Rick, Morty, Beth, Alien, ...etc" 
            name="nombre"
            value={search}
            onChange={(e) => dispatch(searchCharactersThunk(e.target.value))}
        />
    </div>
}

export default Filtros;