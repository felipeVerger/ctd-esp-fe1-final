import {FC, useEffect} from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector as useReduxSelector } from 'react-redux';
import { fetchCharactersThunk, searchCharactersThunk } from '../../redux/actions/characters.actions';
import { GlobalState } from '../../redux/store';
import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';

export const useSelector: TypedUseSelectorHook<GlobalState> = useReduxSelector;

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 * 
 * 
 * @returns un JSX element 
 */
const TarjetaPersonaje:FC = () => {

    const { search, status, characters, page } = useSelector(state => state.characters);
    const dispatch = useDispatch();

    useEffect(() => {
      if (search === ''){
        dispatch(fetchCharactersThunk(page))
      }
      // dispatch(searchCharactersThunk(search))
    }, [search, page])

    if(status === 'loading') {
      return (
        <span>Loading...</span>
      )
    } else if(status === 'failed') {
      return (
        <span>Error</span>
      )
    } else if (status === 'idle') {
      return (
        <span>idle</span>
      )
    }

    return (
      <div className="tarjeta-personaje">
        {characters.map((character) => (
          <div key={character.id}>
            <img
              src={character.image}
              alt="Rick Sanchez"
            />
            <div className="tarjeta-personaje-body">
              <span>{character.name}</span>
              <BotonFavorito esFavorito={false}/>
            </div>
          </div>
        ))}
      </div>
    );
}

export default TarjetaPersonaje;