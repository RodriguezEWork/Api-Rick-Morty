import React, { useRef } from 'react'
import { useForm } from 'react-hook-form'

const FormUncontroller = () => {

    const formulario = useRef(null);

    // Formulario no controlado
    const handleSubmit = (e) => {
        e.preventDefault();

        const datos =  new FormData(formulario.current);
        
        const objetoDatos = Object.fromEntries([...datos.entries()])

        const { taskName, taskDescription, taskSelect } = objetoDatos;

        if(taskName.trim() == "") return console.log('Debes ingresar un nombre si o si');
        if(taskDescription.trim() == "") return console.log('Debes ingresar una descripcion si o si');
        if(taskSelect.trim() == "") return console.log('Debes elegir un valor si o si');
        
        console.log('paso validaciones')
    };

    return (
        <div>
            <h2>No controlado</h2>

            <form onSubmit={handleSubmit} ref={formulario}>
                <input 
                    className="form-control m-2"
                    type="text" 
                    name="taskName" 
                    placeholder="Ingrese su tarea..." 
                />
                <textarea
                    className="form-control m-2"
                    name="taskDescription"
                    placeholder="Ingrese una descripción..."
                />
                <select 
                    className="form-control m-2"
                    name="taskSelect"
                >
                    <option value="pendiente">Pendiente</option>    
                    <option value="completada">Completada</option>    
                </select>
                <button type="submit" className="btn btn-primary">Agregar</button>
            </form>
        </div>
    )
}

export default FormUncontroller