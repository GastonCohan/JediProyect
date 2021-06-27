import React, { useState, useEffect } from "react"
import ItemCountComponent from "../Buttons/ItemCount/ItemCountComponent";
import "./CardItemStyles.css"
import { productsData } from "../ItemList/ItemsListComponent"
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButtonComponent"
import SecundaryButton from "../Buttons/SecundaryButton/SecundaryButtonComponent";
import Modal from 'react-modal';

Modal.setAppElement("#root");


function CardItemComponent() {

    const [isOpen, setIsOpen] = useState(false);
    const [products, setProducts] = useState([]);

    function toggleModal() {
        console.log(isOpen)
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        setTimeout(() => {
            setProducts(productsData);
        });
    });

    return (
        <div className="cardContainer">
            {products.map((products) => {
                return (
                    <div className="innerCardContainer">
                        <div className="imageCard">
                            <img src={products.image} alt="Product" style={{ height: "300px", width: "290px" }}></img>
                        </div>
                        <div className="descriptionCard">
                            <h2 className="titleProduct">{products.name}</h2>
                            <div className="titleProduct">
                                <h3>${products.price}</h3>
                            </div>
                            <div className="titleProduct">
                                <h3> Stock: {products.stock}</h3>
                            </div>
                            <ItemCountComponent stock={products.stock} price={products.price} />
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "5%", marginBottom: "5%" }} onClick={() => toggleModal()}>
                            <SecundaryButton text="Detalle del producto" />
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "5%", marginBottom: "5%" }}>
                            <PrimaryButton text="Agregar al carrito" />
                        </div>
                        <Modal
                            isOpen={isOpen}
                            onRequestClose={toggleModal}
                        >
                            <div>
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <h1>Detalle del Producto</h1>
                                </div>
                                <div style={{ height: "570px", width: "15%", marginTop: "5%", border: "1px solid rgba(0, 0, 0, 1)" }}>
                                    <div style={{ height: "142.5px", borderBottom: "1px solid", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                        <img src="https://http2.mlstatic.com/D_NQ_NP_840693-MLA44312554470_122020-O.jpg" alt="foto detalle 1" style={{ height: "140.5px" }} />
                                    </div>
                                    <div style={{ height: "142.5px", borderBottom: "1px solid", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                        <h1>foto 2 </h1>
                                    </div>
                                    <div style={{ height: "142.5px", borderBottom: "1px solid", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                        <h1>foto 3 </h1>
                                    </div>
                                    <div style={{ height: "142.5px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                        <h1>foto 4 </h1>
                                    </div>

                                </div>
                            </div>
                            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "flex-end" }}>
                                <button onClick={toggleModal}>Cerrar</button>
                            </div>
                        </Modal>
                    </div>
                )
            })}
        </div >
    )
}

const customStyles = {
    content: {
        backgorundColor: "red"
    },
};

export default CardItemComponent
