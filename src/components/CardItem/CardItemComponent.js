import React, { useState, useEffect } from "react"
import { Button } from 'semantic-ui-react'
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButtonComponent"
import "./CardItemStyles.css"
import { productsData } from "../ItemList/ItemsListComponent"

function CardItemComponent() {
    
    const [count, setCount] = useState(0);
    const [products, setProducts] = useState([]);

    const countDownHandler = () => {
        if(count === 0) {
            return 0
        } else { 
            setCount(count - 1)
        }
    }

    useEffect(() => {
        setTimeout(() => {
          setProducts(productsData);
          console.log(products);
        }, 2000);
      });
    
    return (
            <div style={{flexDirection: "row", display: "flex"}}>
                {products.map((products, name, price, image) => {
                    return (
                        <div class="ui card" style={{marginLeft: '50px'}} key={products.id}>
                            <div class="image"> <img src={products.image}></img></div>
                                <div class="content">
                                    <h3 className="titleProduct">{products.name}</h3>
                                        <div className="titleProduct">
                                            <h2>{products.price}</h2>
                                        </div>      
                                </div>
                                <div className="ButtonList">
                                    <Button className="functionButton" color="green" onClick={() => setCount(count + 1)}> + </Button>
                                    <h3 className="contador">{count}</h3>
                                    <Button className="functionButton" color="red"  onClick={() => countDownHandler()}> - </Button>
                                </div>
                            <div className="ButtonAdd">
                                <PrimaryButton text="Agregar a carrito"/>
                            </div>
                        </div>
                        );         
                    })}      
            </div>              
    )}

export default CardItemComponent 
 