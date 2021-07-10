import React, { useState } from 'react'
import "./NavBarStylesComponent.css"
import { Link } from 'react-router-dom'

//Components 

import AnimatedButtonComponent from '../Buttons/AnimatedButton/AnimatedButtonComponent'
import ModalCarrito from "../ModalCarrito/ModalCarrito"

// Const



function NavBarComponent() {

    const [isOpen, setIsOpen] = useState(false);
    const url = window.location.href.toLowerCase()


    function toggleModal() {
        console.log(isOpen)
        setIsOpen(!isOpen);
    }

    return (
        <div className="navBarContainer">
            <ModalCarrito isOpen={isOpen} toggleModal={toggleModal} />
            <div className="title">
                <h1 className="textTitle">Jedi Collector 1971</h1>
            </div>
            <div className="options">
                <div>
                    {!(url.includes("/home")) &&
                        < div >
                            <Link to="/">
                                <AnimatedButtonComponent title="Home" icon="home" />
                            </Link>
                        </div>
                    }
                </div>
                {!(url.includes("signin") || url.includes("register") || url.includes("recoverpassword") || url.includes("recoverpasswordsucced")) &&
                    <div style={{ marginLeft: "10px" }} >
                        <Link to="/SignIn">
                            <AnimatedButtonComponent icon="sign in" title="Ingresar" />
                        </Link>
                    </div>
                }
                <div style={{ marginLeft: "10px" }}>
                    <a href="https://www.instagram.com/yoda.1971/?hl=es-la" target="blanck"><AnimatedButtonComponent icon="instagram" title="Instagram" /></a>
                </div>
                <div style={{ marginLeft: "10px" }}>
                    {!(url.includes("shop")) &&
                        <div>
                            <Link to="/Shop">
                                <AnimatedButtonComponent title="Tienda" icon="shop" />
                            </Link>
                        </div>
                    }
                </div>
                <div>
                    {(url.includes("shop")) &&
                        <div onClick={() => { toggleModal() }}>
                            <AnimatedButtonComponent title="Carrito" icon="shop" />
                        </div>
                    }
                </div>
            </div>
        </div >
    )
}

export default NavBarComponent


