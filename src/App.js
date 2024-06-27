import logo from './logo.svg';
import './App.css';
import React from 'react';
import ListaProductos from './listaProductos';

import listaTareas from './listaTareas';
import listaNotas from './listaNotas'
/*

//JSX
//componentes

//atribtos - variables y funciones
const titulo=<h1 className="saludar">Primer sitio web en React.... Bien venidos</h1>;
const nombre = 'Jimmy Perez';
const saludar = ()=>'Bienvenido al Modulo';

const elemento = (
  <div>
    <h1>{titulo}</h1>
    <p>Hola, {nombre}</p>
    <p>{saludar}</p>
  </div>
);

//jsx no soporta sentencias condicionales, por loq ue 
//solo se usan operadores


//condicionales en jsx -- Operadores Ternarios
//con operadores ternarios
const asistencia = True;

const control = (
  <div>
    <h1>{asistencia ? 'Asistencia registrada' : 'Asistencia no registrada'}</h1>
  </div>
);
//con operadores de conectividad &&

const bienvenida=true;
const elementosBienvenida=(
  <div>
    {bienvenida && <h1>Bienvenido al Modulo</h1>}
  
  </div>
);

//listas en JSX

const colores = ['rojo','verde','azul','amarillo'];

const listacolores = (
  <ul>
    {colores.map((color,index)=>(
      <li key={index}>{color}</li>
    ))}
  </ul>
);

//para estilos
const estilos = {
  color:'red',
  fontSize: '30px'
};

const diplomado = <h1 style={estilos}>Diplomado en Dise;o y Desarrollo web</h1>

//Manejo de eventos en JSX que es similar a html
function boton(){
  alert('Realizo un click');
}
const boton = <button onClick={boton}>Boton prueba</button>;
*/


function App() {
  return (
    <div ClassName='App'>
    <ListaProductos/>  
    <listaTAreas/>
    <listaNotas/>
    <h1>Primera Aplicacion</h1> 
    </div>

    /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          primer sitio web con REACT... de Jimmy Perez
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
    </div>*/

  );
}

export default App;
