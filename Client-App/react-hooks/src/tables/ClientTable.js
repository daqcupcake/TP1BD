import React from 'react'


const ClientTable = props => (
    <table>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Tipo Cliente</th>
                <th>Cedula</th>
                <th>Direccion</th>
                <th>Ciudad</th>
                <th>Telefono</th>
                <th>Estado</th>
            </tr>
        </thead>
        <tbody>
            {console.log("test " + props.dbclients.data.recordset.length)}
            {props.dbclients.data.recordset.length > 0 ? (
                props.dbclients.data.recordset.map(cliente => (
                    <tr>
                        <td>{cliente.nombre}</td>
                        <td>{cliente.ID_tipo_cliente}</td>
                        <td>{cliente.cedula}</td>
                        <td>{cliente.direccion}</td>
                        <td>{cliente.ciudad}</td>
                        <td>{cliente.telefono}</td>
                        <td>{cliente.estado}</td>
                        <td>
                            <button onClick={() => {props.editRow(cliente)}} className="muted-button">Editar</button>
                            <button onClick={() => props.deleteCliente(cliente.Cedula)} className="muted-button">Eliminar</button>
                            <button onClick={() => props.suspendCliente(cliente.Cedula)} className="muted-button">Suspender</button>
                        </td>
                    </tr>
                ))
            ) : (
                <tr>
                    <td colSpan = {3}> Sin Clientes</td>
                </tr>
            )}
        </tbody>
    </table>
)

export default ClientTable;