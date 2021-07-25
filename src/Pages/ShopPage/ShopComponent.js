import React, { useState } from 'react'
import CardItemComponent from '../../components/CardItem/CardItemComponent'
import NavBarComponent from '../../components/NavBar/NavBarComponent'
import AddProduct from '../AddProduct/AddProduct'
import { Button } from 'semantic-ui-react'

// RENDER 



function ShopComponent() {

    const [userActived, setUserActived] = useState("ui button active")
    const [isUserActived, setisUserActived] = useState(true)
    const [adminActived, setAdminActived] = useState("ui button")
    const [isAdminActived, setisAdminActived] = useState(false)
    const [isAddProductAtived, setisAddProductActived] = useState(false)

    const userActivedPress = () => {
        setUserActived("ui button active")
        setisUserActived(true)
        setAdminActived("ui button")
        setisAdminActived(false)

    }

    const adminActivedPress = () => {
        setAdminActived("ui button active")
        setisAdminActived(true)
        setUserActived("ui button")
        setisUserActived(false)
        setisAddProductActived(false)
    }

    const addProductAtived = () => {
        setisAddProductActived(true)
    }



    const isUserActived2 = () => {
        if (isUserActived === true) {
            return true
        } else {
            return false
        }
    }

    const isAdminActived2 = () => {
        if (isAdminActived === true) {
            return true
        } else {
            return false
        }
    }

    return (
        <div>
            <NavBarComponent />
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "5%" }}>
                <div class="ui large buttons">
                    <button class={userActived} onClick={() => userActivedPress()} style={{ background: isUserActived2() ? "green" : "grey", color: 'white' }}> User</button>
                    <div class="or"></div>
                    <button class={adminActived} onClick={() => adminActivedPress()} style={{ background: isAdminActived2() ? "green" : "grey", color: "white" }}> Admin</button>
                </div>
            </div>
            {isAdminActived2() &&
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "2%", marginBottom: "-2%" }}>
                    <Button secondary style={{ backgroundColor: "black", color: "white", width: "250px", borderRadius: "10px" }} onClick={() => addProductAtived()}>Agregar Producto</Button>
                </div>
            }
            {isAddProductAtived && isAdminActived2() ?
                <div>
                    <AddProduct />
                </div>
                :
                <div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "4%", flexDirection: "column" }}>
                        <h1 className="textTitleBody">Tienda </h1>
                        <h3 className="textDescrptionShop">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem odit saepe, placeat sint, quaerat voluptate sed quisquam iusto, et culpa eligendi esse incidunt illo laudantium exercitationem natus eveniet rerum! Quidem?</h3>
                    </div>
                    <div className="tiendaContainer">
                        <CardItemComponent />
                    </div>

                </div>
            }




        </div >


    );
}


export default ShopComponent
