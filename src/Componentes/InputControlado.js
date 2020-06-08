import React, { Component } from 'react';

class InputControlado extends Component{
    state = {
        text: "",
        tieneError:false,
        color:"#e1e1e1",
    }
    actualizar = (event)=>{
        const text = event.target.value;
        const tieneError = text !== '' &&text.length <5
        let color = 'green'
        if(text.trim() === ''){
            color = '#e8e8e8'
        } 
        if(text.trim() !== ''&& text.trim().length<5){
            color = 'red'
        }
        this.setState({text,color})

    }
    render(){
        const styles = {
            border: `1px solid ${this.state.color}`,
            padding: '0.3em 0.6em',
            outline: 'none'
        }
        return(
            <input
             type=""
             value={this.state.text}
             onChange = {this.actualizar}
             style ={styles}
             />

        )
    }
}


export default InputControlado;
