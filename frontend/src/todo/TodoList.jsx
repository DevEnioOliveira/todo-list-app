import React from 'react'
import IconButton from '../template/IconButton'

const TodoList = (props) => {

    const renderRows = () => {
        const list = props.list || [];
        return list.map(todo => (
            <tr key={todo._id}>
                <td>{todo.description}</td>
                <td>
                    <IconButton style='danger' 
                                icon='trash' 
                                onClick={()=> props.handleRemove(todo)}>
                    
                    </IconButton>
                </td>
            </tr>
        ))
    }

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Descrição</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
            </table>
        </div>
    )
}


export default TodoList;