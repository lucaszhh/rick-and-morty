import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Character = () => {

    const { idCharacter } = useParams()
    const navigate = useNavigate()
    const [character, setCharacter] = useState([])

    useEffect(() => {
        const getCharacters = async () => {
            const res = await fetch("https://rickandmortyapi.com/api/character/" + idCharacter)
            const data = await res.json()
            setCharacter(data)
        }
        getCharacters()
    }, [idCharacter])

    const indice = parseInt(idCharacter)

    return (
        <>
            <button onClick={() => navigate(-1)}>volver</button>

                <div class="card">
                    <div class="image">
                        <img src={character.image} alt={character.name} />

                    </div>
                    <div class="card-info">
                        <span>{character.name}</span>
                        <p>{character.species}</p>
                        <p>{character.status}</p>
                        <p>{character.gender}</p>
                    </div>
                    <a href="#" class="button">{character.status}</a>
                </div>


            <button onClick={() => navigate("/characters/" + (indice - 1))}>Anterior</button>
            <button onClick={() => navigate("/characters/" + (indice + 1))}>Siguiente</button>
        </>
    )
}

export default Character