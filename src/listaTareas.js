//imoprtamos dependencias
import React, {useState} from 'react';
import Tarea from './tarea';

//creamos funcion para lista

function listaTareas(){
    const [tareas,setTareas]=useState([]);
    const [nuevaTarea, setNuevaTarea]=useState('');
    const agregarTarea=()=>{
        if(nuevaTarea.trim()){
            setTareas([
                ...tareas,
                {id:Date.now(), texto:nuevaTarea, completa:false}
            ]);
            setNuevaTarea('');
        }

    };
    const marcarCompletoTarea=(id)=>{
        setTareas(
            tareas.map(tarea=>tarea.id===id?{...tareas, completa:!tareas.completa}:tarea)
        );
        
    };
    ///agregando eliminar tarea
    const eliminarTarea=(id)=>{
        setTareas(tareas.filter(tarea=>tarea.id !==id));
    };
/*};*/

return (
    <div>
        <h1>Lista de tareas</h1>
        <lable>Inbrese la tarea: </lable>
        <input type='text' value={nuevaTarea} onChange={(e)=>setNuevaTarea(e.target.value)}></input>
        <button onClick={agregarTarea}>Agregar Tarea</button>
        <div classNAme='lista-tareas'>
            {
                tareas.map(tareas=>(
                    <tarea 
                        key={tareas.id}
                        tarea={tareas}
                        marcarCompleto={marcarCompletoTarea}
                        eliminarTarea={eliminarTarea}
                    />
                )) };
        </div>
    </div>
);
}