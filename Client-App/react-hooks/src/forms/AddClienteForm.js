import React, { useState } from 'react'

const AddClienteForm = props => {

    const initialFormState = { id: null, Nombre: '',Tipo: 1, Cedula: '',Direccion: "", Ciudad:"", Telefono: '',Estado:"" }
    const [cliente, setCliente] = useState(initialFormState)

    const handleInputChange = event => {
        const {name,value}=event.target
        setCliente({ ...cliente, [name]:value})
    }

    return (
        <form onSubmit = {event => {
                //event.preventDefault()
                if(!cliente.Nombre ||!cliente.Tipo || !cliente.Cedula || !cliente.Direccion|| !cliente.Ciudad || !cliente.Telefono || !cliente.Estado) return
                    
                props.addCliente(cliente)
                setCliente(initialFormState)
        }}>
            <label>Nombre</label>
            <input type="text" name="Nombre" value={cliente.Nombre} onChange={handleInputChange} />
            <label>Tipo</label>
            <input type="text" name="Tipo" value={cliente.Tipo} onChange={handleInputChange} />
            <label>Cedula</label>
            <input type="text" name="Cedula" value={cliente.Cedula} onChange={handleInputChange} />
            <label>Direccion</label>
            <input type="text" name="Direccion" value={cliente.Direccion} onChange={handleInputChange} />
            <label>Ciudad</label>
            <input type="text" name="Ciudad" value={cliente.Ciudad} onChange={handleInputChange} />
            <label>Telefono</label>
            <input type="text" name="Telefono" value={cliente.Telefono} onChange={handleInputChange} />
            <label>Estado</label>
            <input type="text" name="Estado" value={cliente.Estado} onChange={handleInputChange} />
            <button>Crear Nuevo Cliente</button>
        </form>
    )
}

export default AddClienteForm