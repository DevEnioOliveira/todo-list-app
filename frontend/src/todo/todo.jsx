import React, { Component } from 'react'
import PageHeader from '../template/PageHeader'


class Todo extends Component  {
    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
            </div>
        )
    }
}

export default Todo;