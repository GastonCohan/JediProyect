import React, { useState, useEffect } from "react"
import ItemCountComponent from "../Buttons/ItemCount/ItemCountComponent";
import "./CardItemStyles.css"
import { productsData } from "../ItemList/ItemsListComponent"
import SecundaryButton from "../Buttons/SecundaryButton/SecundaryButtonComponent";
import ModalComponent from "../Modal/ModalComponent";
import { useCartContext } from "../../context/CartContext";


function CardItemComponent() {

    const [isOpen, setIsOpen] = useState(false);
    const [products, setProducts] = useState([]);
    const [identify, setIdentify] = useState(null);

    const { addToCart } = useCartContext();
    // const onAdd = qty => addToCart(product, qty);

    function toggleModal() {
        setIsOpen(!isOpen);
    }

    function changeIdentify(id) {
        const productos = products.find(p => p.id === id)
        setIdentify(productos)
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
                            <img src={product.images[0]} alt="Product" style={{ height: "300px", width: "290px" }}></img>
                        </div>
                        <div className="descriptionCard">
                            <h2 className="titleProduct">{product.name}</h2>
                            <div className="titleProduct">
                                <h3>${product.price}</h3>
                            </div>
                            <div className="titleProduct">
                                <h3> Stock: {product.stock}</h3>
                            </div>
                            <ItemCountComponent onAdd={qty => addToCart(product, qty)} stock={product.stock} price={product.price} />
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "5%", marginBottom: "5%" }} onClick={() => { toggleModal(); changeIdentify(product.id) }}>
                            <SecundaryButton text="Detalle del producto" />
                        </div>

                    </div>
                )
            })}
        </div>
    )
}
export default CardItemComponent
