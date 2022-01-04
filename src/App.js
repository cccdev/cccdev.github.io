import React, {Component} from "react";
import Table from './table';
import Form from "./form";
import './App.css'

class App extends Component {
    state = {
        characters: []
    };

    removeCharacter = (index) => {
        const {characters} = this.state;
        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index
            })
        })
    };

    handleSubmit = (character) => {
        this.setState({characters: [...this.state.characters, character]})
    };

    render() {
        const {characters} = this.state

        return (
            <div className="App">
                <h1>React Tutorial</h1>
                <p>使用React实现一个表格的行增删</p>
                <Table
                    characterData={characters}
                    removeCharacter={this.removeCharacter}
                />
                <h3>添加新行</h3>
                <Form handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}

export default App