import React, { useState } from 'react'

const AddParteForm = props => {

    const initialFormState = { id: null, Nombre: "", Marca: "",Fabricante: ""}
    const [parte, setParte] = useState(initialFormState)

    const handleInputChange = event => {
        const {name,value}=event.target
        setParte({ ...parte, [name]:value})
    }

    return (
        <form onSubmit = {event => {
                event.preventDefault()
                if(!parte.Nombre || !parte.Marca || !parte.Fabricante) return
                    
                props.addParte(parte)
                setParte(initialFormState)
        }}>
            <label>Nombre</label>
            <input type="text" name="Nombre" value={parte.Nombre} onChange={handleInputChange} />
            <label>Marca</label>
            <input type="text" name="Marca" value={parte.Marca} onChange={handleInputChange} />
            <label>Fabricante</label>
            <input type="text" name="Fabricante" value={parte.Fabricante} onChange={handleInputChange} />
            <button>Crear Nueva Parte</button>
        </form>
    )
}

export default AddParteForm