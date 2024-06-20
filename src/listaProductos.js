//importar todo de producto
import React, {useState} from 'react';

import Producto from './Producto';


//creando Funcion lista productos
function ListaProductos(){
    //manejo del estado inicial con lista de productos
    const [productos, setProductos]=useState([
        {
            id: 1,
            nombre: 'Producto 1',
            precio: 100,
            descripcion: 'descripcion 1'
        },
        {
            id: 2,
            nombre: 'Producto 2',
            precio: 200,
            descripcion: 'descripcion 2'
        },
        {
            id: 3,
            nombre: 'Producto 3',
            precio: 300,
            descripcion: 'descripcion 3'
        },
        {
            id: 4,
            nombre: 'Producto 4',
            precio: 400,
            descripcion: 'descripcion 4'
        },
    ]);
    return(
        <div>
            <h1>Lista de Productos Disponibles</h1>
            <div className='lista-producto'>
                {productos.map(producto=>(
                    <Producto
                    key={producto.id}
                    nombre={producto.nombre}
                    precio={producto.precio}
                    descripcion={producto.descripcion} 
                    />    
                ))}                   
            </div>
        </div>
    );
};
export default ListaProductos;