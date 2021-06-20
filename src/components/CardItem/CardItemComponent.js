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

    const countUpHandler = () => {
        if(products.stock === count) {
            return products.stock
        } else { 
            setCount(count + 1)
        }
    }

    useEffect(() => {
        setTimeout(() => {
          setProducts(productsData);
          console.log(products);
        }, 2000);
      });


    
    return (
            <div style={{flexDirection: "row", display: "flex", justifyContent: "center", alignItems: "center"}}>
                {products.map((products) => {
                    return (
                        <div class="ui card" style={{marginLeft: '50px'}} key={products.id}>
                            <div class="image"> <img src={products.image}></img></div>
                                <div class="content" style={{backgroundColor: '#EDEDED '}}>
                                    <h2 className="titleProduct">{products.name}</h2>
                                        <div className="titleProduct">
                                            <h3>{products.price}</h3>
                                        </div>     
                                        <div className="titleProduct">
                                            <h3> Stock: {products.stock}</h3>
                                        </div>      
                                    <div className="ButtonList">
                                        <Button className="functionButton" color="red"  onClick={() => countDownHandler()}> - </Button>
                                        <h3 className="contador">{count}</h3>
                                        <Button className="functionButton" color="green" onClick={() => countUpHandler()}> + </Button>
                                    </div>
                                    <div className="ButtonAdd">
                                        <PrimaryButton text="Agregar a carrito"/>
                                    </div>
                                </div>
                        </div>
                        );         
                    })}      
            </div>              
    )}

export default CardItemComponent 
 