import React from 'react'
import Swal from 'sweetalert2';
import { useFormulario } from '../hooks/useFormulario';

const Formulario = ({setCharacter}) => {

    const [inputs, handleChange, reset] = useFormulario({
        characterName: ""
    });

    const { characterName } = inputs;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(characterName)

        if (!characterName.trim()){
            return Swal.fire({
                title: "Error!",
                text: "Personaje ogligatorio",
                icon: "error",
            });
        };

        setCharacter(characterName.trim().toLowerCase());
        reset();
    }


    return (
        <form onSubmit={handleSubmit}>
            <input 
                className="form-control m-2"
                type="text"
                name="characterName"
                placeholder="Ingrese un personaje.."
                value={characterName}
                onChange={handleChange}
            />
            <button type="submit" className="btn btn-dark">
                Buscar
            </button>
        </form>
    )
}

export default Formulario