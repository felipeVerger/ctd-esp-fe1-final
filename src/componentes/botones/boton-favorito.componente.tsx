import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { addCharacterToFavorites, removeCharacterFromFavorites } from '../../redux/actions/characters.actions';
import { Character } from '../../types/characters.type';

import './boton-favorito.css';

interface Props {
    isFavorite: boolean;
    character: Character | undefined;
}

interface OnClick {
    onClick: (isFavorite: boolean) => void;
}

type IFavoriteProps = Props & OnClick;


/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 * 
 * Deberás tipar las propiedades si usas este componente
 * 
 * 
 * @returns un JSX element 
 */
const BotonFavorito = ({isFavorite, onClick, character}: IFavoriteProps) => {
    const src = isFavorite ? "/imagenes/star-filled.png" : "/imagenes/star.png";
    
    const dispatch = useDispatch();

    const handleFavorite = () => {
        // isFavorite ? removeCharacterFromFavorites(character) : addCharacterToFavorites(character);
        onClick(!isFavorite);
        dispatch(addCharacterToFavorites(character))
    }
    
    return (
        <div className="boton-favorito" onClick={handleFavorite}>
            <img src={src} alt={"favorito"} />
        </div>
    )
}
export default BotonFavorito;