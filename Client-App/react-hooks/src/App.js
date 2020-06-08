import React, { useState,useEffect, Fragment } from 'react';
import axios from "axios";
//import logo from './logo.svg';
import './App.css';
import ClientTable from "./tables/ClientTable"
import AddClienteForm from "./forms/AddClienteForm"
import EditClientesForm from "./forms/EditClienteForm"
import PartTable from "./tables/PartTable"
import AddParteForm from "./forms/AddParteForm"
import AddEncargadoForm from "./forms/AddEncargadoForm"
import EncargadoTable from "./tables/EncargadoTable"
/*
//default set up of the app
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/


const App = () =>{
  const clientData = [
    {id:1, Nombre: "Juandi",Tipo:1 ,Cedula:121800106330,Direccion: "Casa de Juandi", Ciudad:"Escazu", Telefono:83023956,Estado:"Activo"},
    {id:2, Nombre: "Dani", Tipo: 1,Cedula:12345,Direccion: "Casa de Dani", Ciudad:"Cartago", Telefono:88884444,Estado:"Activo"},
  ]
  
  const [data,setData] = useState({data:{recordset:{}}})

 

  const [clientes, setClientes] = useState(clientData)
  const [editing,setEditing] = useState(false)
  const initialFormStateC = { id: null, Nombre: '',Tipo: 1, Cedula: '',Direccion: "", Ciudad:"", Telefono: '',Estado:"" }
  const [currentClient, setCurrentClient] = useState(initialFormStateC)


  useEffect(() => {
    axios.get('/getClients').then(response => {
      
      console.log(response);
      setData(response)
    })
    
  },[])

  const getClientes = () =>{
    axios.get('/getClients').then(response => {
      
      console.log(response);
      setData(response)
    })
  }

  const addCliente = cliente =>{

    axios.get('/createClient',{
      params:{
        name:cliente.Nombre,
        idtipo:cliente.Tipo,
        cedula:cliente.Cedula,
        direccion:cliente.Direccion,
        ciudad:cliente.Ciudad,
        telefono:cliente.Telefono,
        estado:cliente.Estado

      }
    }).then(response=>{
      console.log(response);
    })
      

    /*cliente.id = clientes.length+1
    setClientes([...clientes, cliente])*/
  }

  const deleteCliente = cedula => { //Hay que cambiar poara la bd
    setClientes(clientes.filter(user => user.Cedula !== cedula))
  }
  const suspendCliente = cedula =>{//Cambiar para la bd

  }

  const UpdateCliente=(cliente) => {
    setEditing(false) //cambiar opara bd

    axios.get('/updateClient',{
      params:{
        id:cliente.id,
        name:cliente.Nombre,
        idtipo:cliente.Tipo,
        cedula:cliente.Cedula,
        direccion:cliente.Direccion,
        ciudad:cliente.Ciudad,
        telefono:cliente.Telefono,
        estado:cliente.Estado

      }
    }).then(response=>{
      console.log(response);
    })
    //setClientes(clientes.map(cliente => (cliente.Cedula === Cedula ? updatedClient : cliente)))
  }

  const editRow = cliente => {
    setEditing(true)
    console.log(cliente)
    setCurrentClient({id: cliente.ID, Nombre: cliente.nombre,Tipo: cliente.ID_tipo_cliente, Cedula: cliente.cedula, Direccion: cliente.direccion, Ciudad:cliente.ciudad, Telefono: cliente.telefono, Estado:cliente.estado})
  }


  //Parts Table
  const partData = [
    {id:1, Nombre: "motor", Marca:"delphi",Fabricante: "Algo Algo"}
  ]

  const [partes, setPartes] = useState(partData)
  const initialFormStateP = { id: null, Nombre: "", Marca: "",Fabricante: "" }
  const [currentPart, setCurrentPart] = useState(initialFormStateP)


  const addParte = parte =>{
    partes.id = partes.length+1
    setPartes([...partes, parte])
  }
  const asoProov = parte =>{
    //algo va aqui
  }
  const asoAuto = parte =>{
    //otra cosa
  }

  //Encargado 
  const EncargadoData = [
    ]

  const [encargados, setEncargados] = useState(EncargadoData)
  const initialFormStateE = { id: null, Nombre: "", Puesto: ""}
  const [currentEncargado, setCurrentEncargado] = useState(initialFormStateE)


  const addEncargado = encargado =>{
    encargados.id = encargados.length+1
    setEncargados([...encargados, encargado])
  }

  return (
    <div className = "container">
      <h1>Test App</h1>

      <div className = "flex-row">
      <div className="flex-large">
					{editing ? (
						<Fragment>
							<h2>Edit Client</h2>
							<EditClientesForm
								editing={editing}
								setEditing={setEditing}
								currentClient={currentClient}
								UpdateCliente={UpdateCliente}
							/>
              
						</Fragment>
					) : (
						<Fragment>
							<h2>Add Client</h2>
							<AddClienteForm addCliente={addCliente} />
						</Fragment>
					)}
				</div>
        <div className = "flex-large">
          <h2>Ver Clientes</h2>
          <ClientTable dbclients={data} users={clientes} editRow={editRow} deleteCliente={deleteCliente} />
        </div>
      </div>
      
      <div className = "flex-row">
      <div className="flex-large">
				
						<Fragment>
							<h2>Add Part</h2>
							<AddParteForm addParte={addParte} />
						</Fragment>
		
				</div>
        <div className = "flex-large">
          <h2>Ver Partes</h2>
          <PartTable users={partes} />
        </div>
      </div>   


      
      <div className = "flex-row">
      <div className="flex-large">
				
						<Fragment>
							<h2>Encargado</h2>
							<AddEncargadoForm addEncargado={addEncargado} />
						</Fragment>
		
				</div>
        <div className = "flex-large">
          <h2>Ver Encargados</h2>
          <EncargadoTable users={encargados} />
        </div>
      </div>     

    </div>
  )
}

export default App;
