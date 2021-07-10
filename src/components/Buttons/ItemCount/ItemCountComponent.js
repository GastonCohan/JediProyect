import React, { useState } from "react"
import { Button } from 'semantic-ui-react'
import "./ItemCountStyles.css"
import PrimaryButton from "../PrimaryButton/PrimaryButtonComponent";
import toast, { Toaster } from 'react-hot-toast';

function ItemCountComponent(props) {

    const llegaStock = props.stock

    const [toAdd, setToAdd] = useState(llegaStock ? 1 : 0);

    const notify = () => toast('Agregaste al carrito');

    const superaStock = () => {
        if (toAdd === llegaStock && llegaStock !== 0) {
            return true
        }
    }

    const productsStock = () => {
        if (llegaStock === 0) {
            return true
        }
    }

    return (
        <div>
            {!productsStock() &&
                <div className="ButtonList">
                    <Button className="functionButton" color="red" onClick={() => setToAdd(toAdd - 1 ? toAdd - 1 : toAdd)}> - </Button>
                    <h3 className="contador" style={{ color: "black" }}>{toAdd}</h3>
                    <Button className="functionButton" color="green" onClick={() => setToAdd(toAdd === llegaStock ? toAdd : toAdd + 1)}> + </Button>
                </div>
            }
            {
                superaStock() &&
                <div style={{ justifyContent: "center", alignItems: "center", display: "flex", marginTop: "5px" }}>
                    <h3 style={{ color: "red" }}>Maximo stock permitido</h3>
                </div>
            }
            {
                productsStock() &&
                <div style={{ justifyContent: "center", alignItems: "center", display: "flex", marginTop: "20px", marginBottom: "30px" }}>
                    <h3 style={{ color: "red" }}>Sin stock acualmente</h3>
                </div>
            }
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "5%", marginBottom: "5%" }} onClick={() => { props.onAdd(toAdd); notify() }}>
                <PrimaryButton disabled={!llegaStock} text="Agregar al carrito" />
            </div>
        </div>

    )
}

export default ItemCountComponent;
