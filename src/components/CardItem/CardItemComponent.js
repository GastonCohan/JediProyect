import React, { useState, useEffect } from "react"
import ItemCountComponent from "../Buttons/ItemCount/ItemCountComponent";
import "./CardItemStyles.css"
import { productsData } from "../ItemList/ItemsListComponent"
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButtonComponent"
import SecundaryButton from "../Buttons/SecundaryButton/SecundaryButtonComponent";
import Modal from 'react-modal';

Modal.setAppElement("#root");

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

function CardItemComponent() {

    const [isOpen, setIsOpen] = useState(false);
    const [products, setProducts] = useState([]);

    function toggleModal() {
        setIsOpen(!isOpen);
        // console.log("hola")
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
                            contentLabel="My dialog"
                            overlayClassName="myoverlay"
                            closeTimeoutMS={500}
                            // className="modal"
                            className={customStyles}
                        >
                            <div>My modal dialog.</div>
                            <button onClick={toggleModal}>Close modal</button>
                        </Modal>
                    </div>
                )
            })}
        </div>
    )
}

export default CardItemComponent
