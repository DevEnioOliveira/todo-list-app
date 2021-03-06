import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import '../template/Custom.css'

import React from 'react'
import Menu from '../template/Menu'
import Routes from './Routes'
import Footer from '../template/Footer'

const Container = (props) => {
    return (
        <div className="container">
            <Menu />
            <Routes />
            <Footer />
        </div>
    )
}

export default Container;