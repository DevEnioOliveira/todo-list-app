import React from 'react'

const PageHeader = (props) => {
    return (
        <header className='page-header'>
            <h2>{props.name}</h2>
            <p>{props.small}</p>
        </header>
    )
}

export default PageHeader;