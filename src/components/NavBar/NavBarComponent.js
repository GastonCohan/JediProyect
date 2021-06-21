import React from 'react'
import "./NavBarStylesComponent.css"

//Components 

import AnimatedButtonComponent from '../Buttons/AnimatedButton/AnimatedButtonComponent'



function NavBarComponent() {

    const goToSignInScreen = () => {
        
    } 

    return (
        <div className="navBarContainer"> 
            <div className="title">
                <h1 className="textTitle">Jedi Collector 1971</h1>
            </div>
            <div className="options">
                <div style={{marginLeft: "10px"}}>
                <AnimatedButtonComponent icon="sign in" title="Ingresar" onClick={goToSignInScreen()}/>
                </div>
                <div style={{marginLeft: "10px"}}>
                <a href="https://www.instagram.com/yoda.1971/?hl=es-la" target="blanck"><AnimatedButtonComponent icon="instagram" title="Instagram"/></a>
                </div>
                <div style={{marginLeft: "10px"}}>
                    <AnimatedButtonComponent title="Tienda" icon="shop"/>
                </div>
            </div>     
        </div>
    )
}

export default NavBarComponent


