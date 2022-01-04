import React, {Component} from "react";
import table from './table.css'
import {Button} from "antd";

const TableHeader = () => {
    return (
        <thead>
        <tr>
            <th>姓名</th>
            <th>工作</th>
            <th>Remove</th>
        </tr>
        </thead>
    )
}

const TableBody = (props) => {
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <Button type="primary" onClick={() => props.removeCharacter(index)}>Delete</Button>
                </td>
            </tr>
        )
    })
    return <tbody>{rows}</tbody>
}

class Table extends Component {
    render() {
        const {characterData, removeCharacter} = this.props
        return (
            <table>
                <TableHeader/>
                <TableBody characterData={characterData} removeCharacter={removeCharacter}/>
            </table>
        )
    }
}

export default Table