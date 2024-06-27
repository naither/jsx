//componenetes simples
//1. importar dependencias
import React from 'react';

function Tarea({tarea, marcarCompleto, eliminarTarea}){
    return(
        <div ClassNAme='tarea'>
            <spam >{tarea.texto}</spam>
            <button onClick={()=>marcarCompleto(tarea.id)}>Completa</button>
            <button onClick={()=>eliminarTarea(tarea.id)}>Eliminar</button>
        </div>
    ); 
}

export default Tarea;