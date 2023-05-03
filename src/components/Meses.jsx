import React from "react"

const Meses = (props) => {

    return (
        <React.Fragment>
        <div>
            <ul>
                {
                    props.mesesApp.map((mes, i) => (
                        <li key={mes}>{i + 1} - {mes}</li>
                    ))
                }
            </ul>
        </div>
        <p>En realidad es para probar los fragmentos xD</p>
        </React.Fragment>
    )
}

export default Meses