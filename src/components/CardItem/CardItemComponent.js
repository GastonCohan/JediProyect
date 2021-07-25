import React, { useState, useEffect } from "react"
import ItemCountComponent from "../Buttons/ItemCount/ItemCountComponent";
import "./CardItemStyles.css"
import SecundaryButton from "../Buttons/SecundaryButton/SecundaryButtonComponent";
import ModalComponent from "../Modal/ModalComponent";
import { useCartContext } from "../../context/CartContext";
import { db } from "../../firebase/firebase"


function CardItemComponent() {

    const [isOpen, setIsOpen] = useState(false);
    const [identify, setIdentify] = useState(null);
    const [productos, setProductos] = useState([]);

    const { addToCart } = useCartContext();
    // const onAdd = qty => addToCart(product, qty);

    function toggleModal() {
        setIsOpen(!isOpen);
    }

    function changeIdentify(id) {

        setIdentify(productos.find(p => p.id === id))
    }

    useEffect(() => {
        // setProducts(productsData);
        getProducts()
    }, []);

    console.log(productos)

    const getProducts = () => {
        const docs = [];
        db.collection("products").onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id })
                console.log(docs)
            });
            setProductos(docs)
        })
    }

    return (
        <div className="cardContainer">
            <ModalComponent isOpen={isOpen} toggleModal={toggleModal} product={identify} />
            {productos.map((producto) => {
                console.log("identificar producto:", producto)
                return (
                    <div className="innerCardContainer">
                        <div className="imageCard">
                            <img src={producto.img1} alt="Product" style={{ height: "300px", width: "290px" }}></img>
                        </div>
                        <div className="descriptionCard">
                            <h2 className="titleProduct">{producto.title}</h2>
                            <div className="titleProduct">
                                <h3>${producto.price}</h3>
                            </div>
                            <div className="titleProduct">
                                <h3> Stock: {producto.stock}</h3>
                            </div>
                            <ItemCountComponent onAdd={qty => addToCart(producto, qty)} stock={producto.stock} price={producto.price} />
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "5%", marginBottom: "5%" }} onClick={() => { toggleModal(); changeIdentify(producto.id) }}>
                            <SecundaryButton text="Detalle del producto" />
                        </div>
                    </div>
                )
            })}

        </div>
    )
}
export default CardItemComponent
