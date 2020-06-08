import React from 'react'

const EncargadoTable = props => (
    <table>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Puesto</th>
            </tr>
        </thead>
        <tbody>
            {console.log(props.users.length)}
            {props.users.length > 0 ? (
                props.users.map(encargado => (
                    <tr>
                        <td>{encargado.Nombre}</td>
                        <td>{encargado.Puesto}</td>
                    </tr>
                ))
            ) : (
                <tr>
                    <td colSpan = {3}> Sin Encargados</td>
                </tr>
            )}
        </tbody>
    </table>
)

export default EncargadoTable;