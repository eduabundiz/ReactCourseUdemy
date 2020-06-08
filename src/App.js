import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDom from 'react-dom';
import TarjetaFruta from './Componentes/TarjetaFruta'
import InputControlado from './Componentes/InputControlado'
import { render } from '@testing-library/react';

class App extends React.Component{
  state ={
    techs:['Vue']
  }
  handleChange = (event)=>{
    const techs = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    )
    
    this.setState({ techs })
  }
  render(){
    return(
      <div>
        <h1>Etiqueta Select</h1>
        {this.state.techs}
        <form>
          <select 
          value ={this.state.techs} 
          onChange={this.handleChange}
          multiple>
            <option value="Angular">Angular</option>
            <option value="React">React</option>
            <option value="Vue">Vue</option>
            <option value="Vanilla">Vanilla</option>
            
          </select>
        </form>
        <ul>
          {this.state.techs.map(tech=>(
            <li key={tech}>
              {tech}
            </li>
          ))}
        </ul>
      </div>  
    )
  }
}

export default App;
