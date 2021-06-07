import React from 'react'
import If from '../template/If'

const IconButton = (props) => {
    if(props.hide) {
        return null;
    } else{
        return (
            <button className={'btn btn-' + props.style} onClick={props.onClick}>
                <i className={'fa fa-'+props.icon}></i>
            </button>
        )
    }
}

export default IconButton;