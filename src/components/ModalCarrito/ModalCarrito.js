import { useState } from 'react';
import Modal from 'react-modal';
import { useCartContext } from '../../context/CartContext'
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButtonComponent"
import { Link } from "react-router-dom";


Modal.setAppElement("#root");

function ModalCarrito({ isOpen, toggleModal }) {


    const { cart, clearCart } = useCartContext();
    const { removeProduct } = useCartContext();
    let totalPrice2

    const totalPrice = () => cart.reduce((acc, item) => {
        return totalPrice2 = acc + item.price * item.quantity
    }, 0);

    console.log("carrito:", cart)

    const totalCartProducts = () => {
        if (cart.map((item) => (item.id)).length > 0) {
            return false
        } else {
            return true
        }
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={toggleModal}
            style={{
                content: {
                    display: "flex",
                    width: "60%",
                    height: "80%",
                    backgroundColor: "white",
                    top: "10%",
                    left: "20%",
                    justifyContent: totalCartProducts() ? "center" : "",
                    alignItems: totalCartProducts() ? "center" : "",
                    borderRadius: "5%",
                    zIndex: 9999
                }
            }}
        >

            {/* <div> */}
            {/* {shopActived ?
                    <div>
                        <h1>hola</h1>
                        <button text="Cerrar" onClick={() => { closeFinishProcess() }}>Cerrar</button>
                    </div> */}
            {/* : */}
            <div>
                {totalCartProducts() ?
                    <div>
                        <div style={{ display: "flex", alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                            <h1>No tienes productos en tu carrito</h1>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "15%" }} onClick={toggleModal}>
                            <button text="Cerrar" style={{}}>Cerrar</button>
                        </div>
                    </div>
                    :
                    <div>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <h1>Carrito </h1>
                        </div>
                        <div style={{ flexDirection: "row", display: "flex" }}>
                            <div style={{ marginLeft: "29%", marginTop: "4%" }}>
                                <h2>Productos</h2>
                            </div>
                            <div style={{ marginLeft: "34%", marginTop: "4%" }}>
                                <h2>Costo</h2>
                            </div>
                        </div>
                        <div style={{ display: "flex", width: "800px", justifyContent: "center" }}>
                            <div style={{ display: "flex", marginTop: "4%", width: "60%", border: "1px solid rgba(0, 0, 0, 1)", flexDirection: "column" }}>
                                {cart.map((item) => (
                                    <div style={{ flexDirection: "row", display: "flex", marginTop: "2.5%", marginBottom: "2.5%", marginLeft: "20px" }}>
                                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginRight: "10px" }}>
                                            <button class="ui icon button" onClick={() => removeProduct(item)}>
                                                <i class="delete icon"></i>
                                            </button>
                                        </div>
                                        <div style={{ border: "1px solid rgba(0, 0, 0, 1)", marginRight: "10px", justifyContent: 'center', alignItems: "center", display: "flex" }}>
                                            <img src={item.img1} alt="Product" style={{ height: "80px", width: "80px" }}></img>
                                        </div>
                                        <h1>{item.quantity} </h1>
                                        <h1 style={{ marginLeft: "5px", marginRight: "5px" }}> - </h1>
                                        <h1>{item.title}</h1>
                                    </div>
                                ))}
                            </div>
                            <div style={{ display: "flex", marginTop: "4%", width: "30%", border: "1px solid rgba(0, 0, 0, 1)", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                {cart.map((item) => (
                                    <div style={{ display: "flex", marginTop: "5%", marginBottom: "5%", marginLeft: "20px", height: '82px', justifyContent: "center", alignItems: "center" }}>
                                        <h1>${item.price * item.quantity}</h1>
                                    </div>
                                ))}

                            </div>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <div style={{ display: "flex", width: "90%", border: "1px solid rgba(0, 0, 0, 1)", justifyContent: "center", alignItems: "center" }}>
                                <h3>Total: ${totalPrice()}</h3>
                            </div>
                        </div>

                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "3%" }} onClick={clearCart} >
                            <PrimaryButton text="VACIAR CARRITO"></PrimaryButton>
                        </div>
                        <Link to="/BuyPage" total={totalPrice2}>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "3%" }} onClick={toggleModal}>
                                <PrimaryButton text="COMPRAR"></PrimaryButton>
                            </div>
                        </Link>
                        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "flex-end", marginTop: "1%", marginBottom: "2%" }} onClick={toggleModal}>
                            <button text="Cerrar">Cerrar</button>
                        </div>
                    </div>
                }
            </div>
            {/* }
            </div> */}
        </Modal >
    )
}

export default ModalCarrito;