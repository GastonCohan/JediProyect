import React from 'react'
import "./NavBarStylesComponent.css"

//Components 

import ShopButtonComponent from '../Buttons/ShopButton/ShopButtonComponent'
import PrimaryButton from '../Buttons/PrimaryButton/PrimaryButtonComponent'

function NavBarComponent() {
    return (
        <div className="navBarContainer"> 
            <div className="title">
                <h1 className="textTitle">Jedi Collector 1971</h1>
            </div>
            <div className="options">
                <div style={{marginLeft: "10px"}}>
                    <PrimaryButton text="Nosotros"/>
                </div>
                <div style={{marginLeft: "10px"}}>
                <a href="https://www.instagram.com/yoda.1971/?hl=es-la"><PrimaryButton text="Instagram"/></a>
                </div>
                <div style={{marginLeft: "10px"}}>
                    <ShopButtonComponent title="Tienda"/>
                </div>
            </div>     
        </div>
    )
}

export default NavBarComponent


