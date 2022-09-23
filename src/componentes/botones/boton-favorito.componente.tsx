import { FC } from 'react';
import { useDispatch} from 'react-redux';
import { toggleFavorites } from '../../redux/actions/characters.actions';
import { useSelector } from '../../redux/store';
import { Character } from '../../types/characters.type';

import './boton-favorito.css';

interface IFavoriteProps {
    character?: Character | undefined;
}

/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 * 
 * Deberás tipar las propiedades si usas este componente
 * 
 * 
 * @returns un JSX element 
 */
const BotonFavorito:FC<IFavoriteProps> = ({ character }) => {
    const { favorites } = useSelector(state => state.characters);
    const dispatch = useDispatch();

    /**
     * When the user clicks the favorite button, dispatch the toggleFavorites action with the character
     * as the payload.
     */
    const handleFavorite = () => {
        dispatch(toggleFavorites(character));
    }

    /* It's checking if the character is in the favorites list. */
    const checkIsFavorite = favorites.find(favorite => favorite.id === character?.id)?.id === character?.id;
    
    const src = checkIsFavorite ? "/imagenes/star-filled.png" : "/imagenes/star.png"
    
    return (
        <div className="boton-favorito" onClick={handleFavorite}>
            <img src={src} alt={"favorito"} />
        </div>
    )
}
export default BotonFavorito;