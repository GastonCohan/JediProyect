import React, { useState, useEffect } from "react"
import ItemCountComponent from "../Buttons/ItemCount/ItemCountComponent";
import "./CardItemStyles.css"
import { productsData } from "../ItemList/ItemsListComponent"


function CardItemComponent() {
    
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setTimeout(() => {
          setProducts(productsData);
          console.log(products);
        });
      });

    return (    
            <div className="cardContainer">
                {products.map((products) => {
                    return (
                        <div className="innerCardContainer">
                            <div className="imageCard">
                                <img src={products.image} style={{height: "290px", width:"300px"}}></img>
                            </div>
                            <div className="descriptionCard">   
                                <h2 className="titleProduct">{products.name}</h2>
                                            <div className="titleProduct">
                                                <h3>${products.price}</h3>
                                            </div>     
                                            <div className="titleProduct">
                                                <h3> Stock: {products.stock}</h3>
                                            </div>  
                                       <ItemCountComponent stock={products.stock} price={products.price}/>
                            </div>   
                        </div>        
                            )
                })}
            </div>         
)}

export default CardItemComponent 
 