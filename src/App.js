import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDom from 'react-dom';
import TarjetaFruta from './Componentes/TarjetaFruta'
import InputControlado from './Componentes/InputControlado'
import { render } from '@testing-library/react';

class App extends React.Component{
  state ={
    tech:'Vue'
  }
  handleChange = (event)=>{
    this.setState({
      tech:event.target.value
    })
  }
  render(){
    return(
      <div>
        <h1>Etiqueta Select</h1>
        {this.state.tech}
        <form>
          <select value ={this.state.tech} onChange={this.handleChange}>
            <option value="Angular">Angular</option>
            <option value="React">React</option>
            <option value="Vue">Vue</option>
            <option value="Vanilla">Vanilla</option>
            
          </select>
        </form>
      </div>  
    )
  }
}

export default App;
