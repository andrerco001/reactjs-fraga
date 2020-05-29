import React, { Component } from 'react';

class Equipe extends Component {
    render(){
        return(
            <div>
                <Sobre nome={this.props.nome} cargo={this.props.cargo} idade={this.props.idade}/>
                <hr/>
            </div>
        );
    }
};

class Sobre extends Component {
    render(){
        return(
            <div>
                <h3>Olá, eu sou {this.props.nome}</h3>
                <h3>Cargo: {this.props.cargo}</h3>
                <h3>Idade: {this.props.idade}</h3>
            </div>
        );
    }
};

function App() {
    return (
        <div>
            <h1>Conheça nossa equipe:</h1>
            <Equipe nome="Mateus" cargo="Programador" idade="30"/>
            <Equipe nome="Lukas" cargo="Designer" idade="27"/>
        </div>
    );
}

export default App;