import React, { useState } from "react"
import { Button } from 'semantic-ui-react'
import PrimaryButton from "../PrimaryButton/PrimaryButtonComponent"
import "./ItemCountStyles.css"

function ItemCountComponent() {
    
    const [count, setCount] = useState(0);
    const [products, setProducts] = useState([]);

    const countDownHandler = () => {
        if(count === 0) {
            return 0
        } else { 
            setCount(count - 1)
        }
    }

    const countUpHandler = () => {
        if(count < products.stock){
            return products.stock
        } else {
            setCount(count + 1)
        }
    }

    return (  
    <div>
        <div className="ButtonList">
            <Button className="functionButton" color="red"  onClick={() => countDownHandler()}> - </Button>
            <h3 className="contador">{count}</h3>
            <Button className="functionButton" color="green" onClick={() => countUpHandler()}> + </Button>
        </div>
        <div className="ButtonAdd">
            <PrimaryButton text="Agregar a carrito"/>
        </div> 
    </div>

)}

export default ItemCountComponent; 
 