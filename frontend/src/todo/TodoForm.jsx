import React from 'react'
import Grid from '../template/Grid'
import IconButton from '../template/IconButton'

const TodoForm = (props) => {
   return (
        <div role="form" className="todoForm form-inline">
            <div className="col-xs-12 col-sm-9 col-md-9 d-flex">
                <input id="description" 
                        className="form-control" 
                        placeholder="adicione uma tarefa" 
                        value={props.description}
                        onChange={props.handleChange}
                />
                <div className="col-xs-12 col-sm-3 col-md-2 m-2">
                    <IconButton 
                        style="primary" 
                        icon='plus'
                        onClick={props.handleAdd}></IconButton>
                </div>
            </div>
        </div>
   )
}


export default TodoForm;