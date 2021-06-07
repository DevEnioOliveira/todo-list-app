import React from 'react'

const Footer = (props) => {
    return (
        <footer className="bg-dark text-center text-white fixed-bottom">
            <div className="container p-4">
            
                <section className="mb-4">
                
                <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fa fa-facebook-f"></i
                ></a>

                
                <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fa fa-twitter"></i
                ></a>

                
                <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fa fa-google"></i
                ></a>

                
                <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fa fa-instagram"></i
                ></a>

                
                <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fa fa-linkedin"></i
                ></a>

                
                <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fa fa-github"></i
                ></a>
                </section>
            </div>
        </footer>
    )
}

export default Footer;