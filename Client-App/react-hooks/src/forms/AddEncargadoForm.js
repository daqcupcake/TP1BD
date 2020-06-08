import React, { useState } from 'react'

const AddEncargadoForm = props => {

    const initialFormState = { id: null, Nombre: '',Puesto:"" }
    const [encargado, setEncargado] = useState(initialFormState)

    const handleInputChange = event => {
        const {name,value}=event.target
        setEncargado({ ...encargado, [name]:value})
    }

    return (
        <form onSubmit = {event => {
                event.preventDefault()
                if(!encargado.Nombre ||!encargado.Puesto ) return
                    
                props.addEncargado(encargado)
                setEncargado(initialFormState)
        }}>
            <label>Nombre</label>
            <input type="text" name="Nombre" value={encargado.Nombre} onChange={handleInputChange} />
            <label>Puesto</label>
            <input type="text" name="Puesto" value={encargado.Puesto} onChange={handleInputChange} />
            <button>Agregar encargado</button>
        </form>
    )
}

export default AddEncargadoForm