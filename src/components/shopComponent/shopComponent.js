import React, { useState } from 'react'
import CardItemComponent from '../../components/CardItem/CardItemComponent'
import NavBarComponent from '../../components/NavBar/NavBarComponent'
import AddProduct from '../../Pages/AddProduct/AddProduct'
import { Button } from 'semantic-ui-react'

// RENDER 



function ShopComponent(props) {

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

    const adminAccount = () => {
        return false
    }


    return (
        <div style={{ backgroundColor: !isAdminActived2() ? '#EEEEEE' : "white" }}>
            <NavBarComponent />
            {adminAccount() &&
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "5%" }}>
                    <div class="ui large buttons">
                        <button class={userActived} onClick={() => userActivedPress()} style={{ background: isUserActived2() ? "green" : "grey", color: 'white' }}> User</button>
                        <div class="or"></div>
                        <button class={adminActived} onClick={() => adminActivedPress()} style={{ background: isAdminActived2() ? "green" : "grey", color: "white" }}> Admin</button>
                    </div>
                </div>
            }
            {
                isAdminActived2() &&
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "2%", marginBottom: "-2%" }}>
                    <Button secondary style={{ backgroundColor: "black", color: "white", width: "250px", borderRadius: "10px" }} onClick={() => addProductAtived()}>Agregar Producto</Button>
                </div>
            }
            {
                isAddProductAtived && isAdminActived2() ?
                    <div>
                        <AddProduct firebaseCollection={props.firebaseCollection} />
                    </div>
                    :
                    <div>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: isAdminActived2() ? "4%" : "2%", flexDirection: "column" }}>
                            <h1 className="textTitleBody">Tienda {props.name}</h1>
                            <h3 className="textDescrptionShop">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem odit saepe, placeat sint, quaerat voluptate sed quisquam iusto, et culpa eligendi esse incidunt illo laudantium exercitationem natus eveniet rerum! Quidem?</h3>
                        </div>
                        <div className="tiendaContainer">
                            <CardItemComponent collection={props.collection} />
                        </div>

                    </div>
            }




        </div >


    );
}


export default ShopComponent
