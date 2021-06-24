import React, { useState } from "react"
import { Button } from 'semantic-ui-react'
import PrimaryButton from "../PrimaryButton/PrimaryButtonComponent"
import "./ItemCountStyles.css"

function ItemCountComponent(props) {
    
    const [count, setCount] = useState(0);
    const [total, setTotal] = useState(0); 
    const llegaStock = props.stock
    const llegaPrecio = props.price

    const countDownHandler = () => {
        if(count === 0) {
            return 0
        } else { 
            setCount(count - 1)
            setTotal((count - 1) * llegaPrecio)
        }
    }
    
    const countUpHandler = () => {
        if(count === llegaStock){
            return count 
        } else {
            setCount(count + 1)
            setTotal((count + 1) * llegaPrecio)
        } 
    }

    const superaStock = () => {
        if(count === llegaStock){
            return true
        }}

    const priceCounter = () => {
        if(count > 0){
            return true
        }}

    return (  
    <div>
        <div className="ButtonList">
            <Button className="functionButton" color="red"  onClick={() => countDownHandler()}> - </Button>
            <h3 className="contador" style={{color: "black"}}>{count}</h3>
            <Button className="functionButton" color="green" onClick={() => countUpHandler()}> + </Button>
        </div>
        {
            priceCounter() &&
            <div style={{justifyContent: "center", alignItems:"center", display:"flex", marginTop:"5px"}}>
                <h3>Subtotal: ${total}</h3>       
            </div>
        }  
        {
            superaStock() &&
            <div style={{justifyContent: "center", alignItems:"center", display:"flex", marginTop:"5px"}}> 
                <h3 style={{color:"red"}}>Maximo stock permitido</h3>
            </div>
        }    
        <div className="ButtonAdd">
            <PrimaryButton text="Agregar a carrito"/>
        </div> 
    </div>

)}

export default ItemCountComponent; 
 