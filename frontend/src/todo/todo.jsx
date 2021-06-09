import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/PageHeader'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const URL = 'http://localhost:3003/api/todos'
class Todo extends Component  {

    constructor(props) {
        super(props)

        this.state = { 
            description: '',
            list: [] 
        }


        //transforma a função e o uso do this para o escopo da classe
        this.handleAdd = this.handleAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        this.handlePending = this.handlePending.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.refresh();
    }


    //função que atualiza a página após ação
    refresh(description = '') {
        const search = description ? `&description__regex=/${description}/` :  ''
        axios.get(`${URL}?sort=-createdAt${search}`)
        .then((resp) => this.setState({...this.state, description, list: resp.data}))
    }


    //função que adiciona a tarefa no banco

    handleAdd() {
        const description = this.state.description; // constante que guarda o estado inicial 
        axios.post(URL, { description })
                .then( resp => this.refresh() )
    }

    //função que sinaliza que a tarefa está feita e altera no banco
    handleCheck(todo) {
        axios.put(`${URL}/${todo._id}`,{...todo, done: true})
                .then(resp => this.refresh(this.state.description))
    }


    //função que controla o estado da tarefa pendente 
    handlePending(todo) {
        axios.put(`${URL}/${todo._id}`, {...todo, done: false})
        .then(resp => this.refresh(this.state.description))
    }

    //tarefa que muda o estado da app após a ação aparece na tela 
    handleChange(e) {
        this.setState({...this.state, description: e.target.value })
    }


    //função que deleta a tarefa
    handleRemove(todo) {
        axios.delete(`${URL}/${todo._id}`)
        .then(resp => this.refresh(this.state.description))
    }

    handleSearch() {
        this.refresh(this.state.description)
    }

    handleClear() {
        this.refresh()
    }


    render() {
        return (
            <div>
                <PageHeader name='Tarefas' 
                            small='Cadastro'></PageHeader>
                <TodoForm description={this.state.description}
                        handleChange={this.handleChange}
                        handleAdd={this.handleAdd} 
                        handleSearch={this.handleSearch} 
                        handleClear={this.handleClear}/>
                <TodoList list={this.state.list}
                            handleCheck={this.handleCheck}
                            handlePending={this.handlePending}
                            handleRemove={this.handleRemove}/>
            </div>
        )
    }
}

export default Todo;