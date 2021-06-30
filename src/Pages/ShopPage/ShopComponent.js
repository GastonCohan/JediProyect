import React from 'react'
import CardItemComponent from '../../components/CardItem/CardItemComponent'
import NavBarComponent from '../../components/NavBar/NavBarComponent'

// RENDER 

const ShopComponent = () => (
    <div>
        <NavBarComponent />
        <div className="titleContainer">
            <h1 className="textTitleBody">Tienda </h1>
            <h3 className="textDescrptionShop">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem odit saepe, placeat sint, quaerat voluptate sed quisquam iusto, et culpa eligendi esse incidunt illo laudantium exercitationem natus eveniet rerum! Quidem?</h3>
        </div>
        <div className="tiendaContainer">
            <CardItemComponent />
        </div>
    </div >
)

export default ShopComponent
