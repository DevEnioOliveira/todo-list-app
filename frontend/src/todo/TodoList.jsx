import React from 'react'
import IconButton from '../template/IconButton'

const TodoList = (props) => {

    const renderRows = () => {
        const list = props.list || [];
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>
                    <IconButton style="success" 
                                icon="check"
                                onClick={() => props.handleCheck(todo)}
                                hide={todo.done}>

                    </IconButton>
                    <IconButton style="warning" 
                                icon="undo"
                                onClick={() => props.handlePending(todo)}
                                hide={!todo.done}>

                    </IconButton>
                    <IconButton style='danger' 
                                icon='trash' 
                                onClick={()=> props.handleRemove(todo)}
                                hide={!todo.done}>
                    
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
                        <th className="tableActions">Ações</th>
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