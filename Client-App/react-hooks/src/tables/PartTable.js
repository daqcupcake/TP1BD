import React from 'react'

const PartTable = props => (
    <table>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Marca</th>
                <th>Fabricante</th>
            </tr>
        </thead>
        <tbody>
            {console.log(props.users.length)}
            {props.users.length > 0 ? (
                props.users.map(parte => (
                    <tr>
                        <td>{parte.Nombre}</td>
                        <td>{parte.Marca}</td>
                        <td>{parte.Fabricante}</td>
                        <td>
                            <button onClick={() => {props.asoProov()}} className="muted-button">Asociar Proovedor</button>
                            <button onClick={() => props.asoAuto()} className="muted-button">Asociar Automovil</button>
                        </td>
                    </tr>
                ))
            ) : (
                <tr>
                    <td colSpan = {3}> Sin Partes</td>
                </tr>
            )}
        </tbody>
    </table>
)

export default PartTable;