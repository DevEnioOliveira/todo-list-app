import React from 'react'
import IconButton from '../template/IconButton'

const TodoForm = (props) => {

    const keyHandler = (e) => {
        if(e.key === 'Enter') {
            e.shiftKey ? props.handleSearch() : props.handleAdd();
        } else if(e.key === 'Escape') {
            props.handleClear()
        }
    }

   return (
        <div role="form" className="todoForm form-inline">
            <div className="col-xs-12 col-sm-9 col-md-9 d-flex">
                <input id="description" 
                        className="form-control" 
                        placeholder="Adicione uma tarefa" 
                        value={props.description}
                        onKeyUp={keyHandler}
                        onChange={props.handleChange}
                />
                <div className="col-xs-12 col-sm-3 col-md-2 m-2">
                    <IconButton 
                        style="primary" 
                        icon='plus'
                        onClick={props.handleAdd}></IconButton>
                        <IconButton style="info" 
                                    icon='search'
                                    onClick={props.handleSearch}>

                        </IconButton>
                        <IconButton style="warning" 
                                    icon='close'
                                    onClick={props.handleClear}>

                        </IconButton>
                </div>
            </div>
        </div>
   )
}


export default TodoForm;