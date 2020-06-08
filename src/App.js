import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDom from 'react-dom';
import TarjetaFruta from './Componentes/TarjetaFruta'
import InputControlado from './Componentes/InputControlado'
import { render } from '@testing-library/react';

class App extends React.Component{
  state ={
    name:'',
    email:''
  }
  actualizar = (name,text)=>{
    this.setState({
      [name]:text
    })
  }
  render(){
    return(
      <div>
        <p>Inputs controlados</p>
        <InputControlado 
          name='name'
          onChange={this.actualizar}
          placeholder ='Nombre Completo'
        />
         <InputControlado 
         name='email'
          onChange={this.actualizar}
          placeholder ='Tu Email'
        />
        <h2>Nombre {this.state.name}</h2>
        <h2>Email {this.state.email}</h2>
      </div>  
    )
  }
}

export default App;
