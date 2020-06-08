import React, { useState, useEffect } from 'react'

const EditClienteForm = props => {
  const [cliente, setCliente] = useState(props.currentClient)

  useEffect(
    () => {
      setCliente(props.currentClient)
    },
    [ props ]
  )
  const handleInputChange = event => {
    const { name, value } = event.target

    setCliente({ ...cliente, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        console.log(cliente)
        props.UpdateCliente(cliente)
      }}
    >
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
      <button>Update Cliente</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  )
}

export default EditClienteForm