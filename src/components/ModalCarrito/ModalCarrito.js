import Modal from 'react-modal';
import { useCartContext } from '../../context/CartContext'
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButtonComponent"
import SecundaryButton from "../Buttons/SecundaryButton/SecundaryButtonComponent"

Modal.setAppElement("#root");

function ModalCarrito({ isOpen, toggleModal, product }) {
    const { cart, clearCart } = useCartContext();
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
                    left: "20%"
                }
            }}
        >
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
                <div style={{ display: "flex", width: "800px", justifyContent: "center", }}>
                    <div style={{ display: "flex", height: "350px", marginTop: "4%", width: "60%", border: "1px solid rgba(0, 0, 0, 1)", flexDirection: "column", flexWrap: "wrap" }}>
                        {cart.map((item) => (
                            <div style={{ flexDirection: "row", display: "flex", marginTop: "5%", marginLeft: "20px" }}>
                                <div style={{ border: "1px solid rgba(0, 0, 0, 1)", marginRight: "10px", justifyContent: 'center', alignItems: "center", display: "flex" }}>
                                    <img src={item.images[0]} alt="Product" style={{ height: "80px", width: "80px" }}></img>
                                </div>
                                <h1>{item.quantity} </h1>
                                <h1 style={{ marginLeft: "5px", marginRight: "5px" }}> - </h1>
                                <h1>{item.name}</h1>
                            </div>
                        ))}
                    </div>
                    <div style={{ display: "flex", height: "350px", border: "1px solid rgba(0, 0, 0, 1)", marginTop: "4%", width: "30%", justifyContent: "center" }}>
                        <div style={{ flexDirection: "column" }}>
                            {/* costo */}
                        </div>
                    </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "3%" }} onClick={clearCart} >
                    <PrimaryButton text="VACIAR CARRITO"></PrimaryButton>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "3%" }} >
                    <PrimaryButton text="COMPRAR"></PrimaryButton>
                </div>
                <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "flex-end", marginTop: "1%" }} onClick={toggleModal}>
                    <button text="Cerrar">Cerrar</button>
                </div>
            </div>
        </Modal >
    )
}

export default ModalCarrito;