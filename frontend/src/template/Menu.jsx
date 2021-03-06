import React from 'react'

const Menu = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className='container'>
                <a className="navbar-brand" href="#">
                    <i className='fa fa-calendar-check-o'>TodoApp</i>
                </a>
                    
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#/todos">Tarefas <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">Sobre</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Menu;