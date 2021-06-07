import React from 'react'

const TodoForm = (props) => {
   return (
        <div role="form" className="todoForm form-inline">
            <div className="col-xs-12 col-sm-9 col-md-9 d-flex">
                <input id="description" 
                        className="form-control" 
                        placeholder="adicione uma tarefa" 
                />
                <div className="col-xs-12 col-sm-3 col-md-2 m-2">
                    <button className="bt btn-primary">
                        <i className="fa fa-plus"></i>
                    </button>
                </div>
            </div>
        </div>
   )
}


export default TodoForm;