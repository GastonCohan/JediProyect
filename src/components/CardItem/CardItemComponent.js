import React, { useState, useEffect } from "react"
import ItemCountComponent from "../Buttons/ItemCount/ItemCountComponent";
import "./CardItemStyles.css"
import { productsData } from "../ItemList/ItemsListComponent"
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButtonComponent"
import SecundaryButton from "../Buttons/SecundaryButton/SecundaryButtonComponent";
import ModalComponent from "../Modal/ModalComponent";

function CardItemComponent() {

    const [isOpen, setIsOpen] = useState(false);
    const [products, setProducts] = useState([]);
    const [identify, setIdentify] = useState(null);

    function toggleModal() {
        console.log(isOpen)
        setIsOpen(!isOpen);
    }

    function changeIdentify(id) {
        const probando = products.find(p => p.id === id)
        console.log("probando id:", id)
        console.log("probando products:", products)
        setIdentify(probando)
        console.log("ahora si", probando)
    }



    useEffect(() => {
        setTimeout(() => {
            setProducts(productsData);
        });
    });

    return (
        <div className="cardContainer">
            <ModalComponent isOpen={isOpen} toggleModal={toggleModal} product={identify} />
            {products.map((product) => {
                return (
                    <div className="innerCardContainer">
                        <div className="imageCard">
                            <img src={product.image} alt="Product" style={{ height: "300px", width: "290px" }}></img>
                        </div>
                        <div className="descriptionCard">
                            <h2 className="titleProduct">{product.name}</h2>
                            <div className="titleProduct">
                                <h3>${product.price}</h3>
                            </div>
                            <div className="titleProduct">
                                <h3> Stock: {product.stock}</h3>
                            </div>
                            <ItemCountComponent stock={product.stock} price={product.price} />
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "5%", marginBottom: "5%" }} onClick={() => { toggleModal(); changeIdentify(product.id) }}>
                            <SecundaryButton text="Detalle del producto" />
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "5%", marginBottom: "5%" }}>
                            <PrimaryButton text="Agregar al carrito" />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default CardItemComponent
