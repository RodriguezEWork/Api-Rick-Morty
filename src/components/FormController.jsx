import React, { useState } from 'react'

const FormController = () => {

    const [task, setTask] = useState({
        taskName: "",
        taskDescription: "",
        taskSelect: "pendiente",
        taskCheckbox: false,
    });

    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const { taskName, taskDescription } = task;
    
        if (!taskName.trim() || !taskDescription.trim()) {
            console.log("campos vacíos");
            setError(true);
            return;
        } else {
            setError(false);
        }
    
    };
    
    const PintarError = () => (
        <div className="alert alert-danger">Todos los campos obligatorios</div>
    );

    const handleChange = (e) => {
        const { name, value, checked, type } = e.target;

        setTask((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    return (
        <React.Fragment>
            <h2>controlado</h2>

            {error && <PintarError />}

            <form onSubmit={handleSubmit}>
                <input 
                    className="form-control m-2"
                    type="text" 
                    name="taskName" 
                    placeholder="Ingrese su tarea..." 
                    value={task.taskName}
                    onChange={handleChange}
                />
                <textarea
                    className="form-control m-2"
                    name="taskDescription"
                    placeholder="Ingrese una descripción..."
                    value={task.taskDescription}
                    onChange={handleChange}
                />
                <select 
                    className="form-control m-2"
                    name="taskSelect"
                    value={task.taskSelect}
                    onChange={handleChange}
                >
                    <option value="pendiente">Pendiente</option>    
                    <option value="completada">Completada</option>    
                </select>
                <div className="form-check">
                    <input 
                        className="form-check-input" 
                        type="checkbox"
                        name="taskCheckbox" 
                        id="flexCheckDefault" 
                        checked={task.taskCheckbox}
                        onChange={handleChange}    
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Default checkbox
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">Agregar</button>
            </form>
        </React.Fragment>
    )
}

export default FormController