import React from 'react'
import "./NavBarStylesComponent.css"

//Components 

import ShopButtonComponent from '../ShopButton/ShopButtonComponent'
import PrimaryButton from '../PrimaryButton/PrimaryButtonComponent'

function NavBarComponent() {
    return (
        <div className="navBarContainer"> 
            <div className="title">
                <h1>Jedi Collector</h1>
            </div>
            <div className="options">
                <PrimaryButton text="About Us"/>
                <PrimaryButton text="Instagram"/>
                <ShopButtonComponent title="Shop"/>
            </div>     
        </div>
    )
}

export default NavBarComponent


