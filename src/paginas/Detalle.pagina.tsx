import { FC, useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import BotonFavorito from "../componentes/botones/boton-favorito.componente";
import TarjetaEpisodio from "../componentes/episodios/tarjeta-episodio.componente";
import { getCharacterById } from "../service/service";
import { Character } from "../types/characters.type";

import "./Detalle.css";

/**
 * Esta es la pagina de detalle. Aqui se puede mostrar la vista sobre el personaje seleccionado junto con la lista de episodios en los que aparece
 * 
 * EL TRABAJO SOBRE ESTE ARCHIVO ES OPCIONAL Y NO ES REQUISITO DE APROBACION
 * 
 * 
 * 
 * Uso: 
 * ``` <PaginaDetalle /> ```
 * 
 * @returns la pagina de detalle
 */
const PaginaDetalle:FC = () => {
    const [character, setCharacter] = useState<Character>();
    const [isFavorite, setIsFavorite] = useState<boolean>(false);
    const { id }: any = useParams();

    useEffect(() => {
        getCharacterById(id).then((data) => {
            setCharacter(data);
        })
    }, [id])


    return (
    <div className="container">
        <h3>{character?.name}</h3>
        <div className={"detalle"}>
            <div className={"detalle-header"}>
                <img src={character?.image} alt={character?.name}/>
                <div className={"detalle-header-texto"}>

                    <p>{character?.name}</p>
                    <p>Planeta: {character?.origin?.name}</p>
                    <p>Genero: {character?.gender}</p>
                </div>
                <BotonFavorito isFavorite={isFavorite} onClick={setIsFavorite} character={character}/>
            </div>
        </div>
        <h4>Lista de episodios donde apareció el personaje</h4>
        <div className={"episodios-grilla"}>
            {character?.episode?.map((episode, index) => (
                <div className="tarjeta-episodio" key={index}>
                    <h4>{episode}</h4>
                    <div>
                        <span>S01E01</span>
                        <span>Lanzado el: April 7, 2014</span>
                    </div>
                </div>
            ))}
            {/* <TarjetaEpisodio />
            <TarjetaEpisodio />
            <TarjetaEpisodio /> */}
        </div>
    </div>
    )
}

export default PaginaDetalle