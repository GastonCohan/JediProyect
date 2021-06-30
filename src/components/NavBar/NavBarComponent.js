import React from 'react'
import "./NavBarStylesComponent.css"
import { Link } from 'react-router-dom'

//Components 

import AnimatedButtonComponent from '../Buttons/AnimatedButton/AnimatedButtonComponent'

// Const

function NavBarComponent() {

    const url = window.location.href.toLowerCase()

    return (
        <div className="navBarContainer">
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
            </div>
        </div >
    )
}

export default NavBarComponent


