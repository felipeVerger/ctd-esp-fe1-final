import {FC, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { fetchCharactersThunk } from '../../redux/actions/characters.actions';
import { Link } from 'react-router-dom';
import { useSelector } from '../../redux/store';
import BotonFavorito from '../botones/boton-favorito.componente';

import './tarjeta-personaje.css';

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
          <Link to={`/detalle/${character.id}`} key={character.id}>
            <img
              src={character.image}
              alt="Rick Sanchez"
            />
            <div className="tarjeta-personaje-body">
              <span>{character.name}</span>
              <BotonFavorito esFavorito={false}/>
            </div>
          </Link>
        ))}
      </div>
    );
}

export default TarjetaPersonaje;