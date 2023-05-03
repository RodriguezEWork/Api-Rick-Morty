import Meses from "./components/Meses";
import Contados from "./components/Contados";
import FormUncontroller from "./components/FormUncontroller";
import FormController from "./components/FormController";
import Formulario from "./components/Formulario";
import PintarDatos from "./components/PintarDatos";
import { useState } from "react";

const App = () => {
    const user = true;
    const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']

    const SaludoBienvenida = () => <h2 className="text-warning">Bienvenido!</h2>;
    
    const SaludoDespedida = () => (
        <h2 className="text-secondary">Usuario offline</h2>
    );

    const avisame = () => (
        console.log('te aviso entonces')
    );

    const [character, setCharacter] = useState("");
    
    return (
        <div className="container">
            <h1 className="">Aplicacion personal</h1>
            {user ? <SaludoBienvenida /> : <SaludoDespedida />}

            <Formulario setCharacter={setCharacter}/>

            <button
                className="btn btn-success mt-2"
                onClick={() => setCharacter("")}
            >
                Reiniciar
            </button>

            <PintarDatos character={character} />
            {/* <Contados />

            <Meses mesesApp={meses}/>

            <Meses mesesApp={meses}/>

            <button onClick={avisame}>Aviso</button>
            
            <FormUncontroller />
            <FormController /> */}

        </div>
    );
}

export default App