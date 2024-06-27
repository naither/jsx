//importamos

import React, {useState} from 'react';
import Nota from './Notas';

function ListaNotas(){
    const [notas, setNotas]=useState([]);
    const [nuevaNota, setNuevaNota]=useState('');
    cosnt [busqueda,setBusqueda]=useState('');

    const agregarNota=()=>{
        if(nuevaNota.trim()){
            setNotas([
                ...notas,
                {id:Date.now(),texto:nuevaNota}
            ]);
            setNuevaNota('');
        };
    };
    const eliminatNota=(id)=>{
        setNotas(notas.filter(nota=>nota.id !==id));

        const filtradoNotas =notas.filter(
        
            nota=>nota.texto.toLowerCase().includes(busqueda.toLowerCase())
        );

    };
    
  return(
    <div>
        <h1>Lista de Notas</h1>
        <label>Ingrese la nota: </label>
        <input
            type='text'
            value={nuevaNota}
            onChange={(e)=>setBusqueda(e.target.value)}

        ></input>
        <button onClick={agregarNota}>Agregar Nota</button>
        <div className='Lista-Notas'>
            {
            
            }
        </div>

    </div>
  )
    
};
export default ListaNotas;