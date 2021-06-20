import React from 'react'
import "./NavBarStylesComponent.css"

//Components 

import ShopButtonComponent from '../Buttons/ShopButton/ShopButtonComponent'
import PrimaryButton from '../Buttons/PrimaryButton/PrimaryButtonComponent'

function NavBarComponent() {
    return (
        <div className="navBarContainer"> 
            <div className="title">
                <h1 className="textTitle">Jedi Collector</h1>
            </div>
            <div className="options">
                <div style={{marginLeft: "10px"}}>
                    <PrimaryButton text="Nosotros"/>
                </div>
                <div style={{marginLeft: "10px"}}>
                    <PrimaryButton text="Instagram"/>
                </div>
                <div style={{marginLeft: "10px"}}>
                    <ShopButtonComponent title="Tienda"/>
                </div>
            </div>     
        </div>
    )
}

export default NavBarComponent


