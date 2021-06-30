import { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement("#root");

function ModalComponent({ isOpen, toggleModal, product }) {

    const [fotoSeleccionada, setFotoSeleccionada] = useState(0)

    function changeFirstPhoto() {
        setFotoSeleccionada(0)
    }

    function changeSecondPhoto() {
        setFotoSeleccionada(1)
    }

    function changeThirdPhoto() {
        setFotoSeleccionada(2)
    }

    function changeFourPhoto() {
        setFotoSeleccionada(3)
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
                    left: "20%"
                }
            }}
        >
            {product &&
                <div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <h1>Detalle del Producto: {product.name} </h1>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", width: "800px" }}>
                        <div style={{ height: "450px", width: "15%", marginTop: "4%", border: "1px solid rgba(0, 0, 0, 1)" }}>
                            <div style={{ height: "112.5px", borderBottom: "1px solid", display: "flex", justifyContent: "center", alignItems: "center" }} onClick={() => changeFirstPhoto()} >
                                <img src={product.images[0]} style={{ height: "100px", width: "100px", }} alt='ImagenPrincipal' />
                            </div>
                            <div style={{ height: "112.5px", borderBottom: "1px solid", display: "flex", justifyContent: "center", alignItems: "center" }} onClick={() => changeSecondPhoto()}>
                                <img src={product.images[1]} style={{ height: "100px", width: "100px", }} alt='SegundaImagen' />
                            </div>
                            <div style={{ height: "112.5px", borderBottom: "1px solid", display: "flex", justifyContent: "center", alignItems: "center" }} onClick={() => changeThirdPhoto()}>
                                <img src={product.images[2]} style={{ height: "100px", width: "100px", }} alt='TerceraImagen' />
                            </div>
                            <div style={{ height: "112.5px", display: "flex", justifyContent: "center", alignItems: "center" }} onClick={() => changeFourPhoto()}>
                                <img src={product.images[3]} style={{ height: "100px", width: "100px", }} alt="CuartaImagen" />
                            </div>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "450px", marginTop: "4%", width: "60%", border: "1px solid rgba(0, 0, 0, 1)", marginLeft: "10px" }}>
                            <img src={product.images[fotoSeleccionada]} style={{ height: "380px", width: "380px", }} alt='ImagenSeleccionada' />
                        </div>
                        <div style={{ display: "flex", height: "450px", border: "1px solid rgba(0, 0, 0, 1)", marginTop: "4%", width: "30%", marginLeft: "10px", justifyContent: "center" }}>
                            <div style={{ flexDirection: "column" }}>
                                <h2 style={{ marginTop: "50px" }}>Caracterísitcas</h2>
                                <h3 style={{ marginTop: "50px" }}>Altura: {product.altura} </h3>
                                <h3>Peso: {product.peso}</h3>
                                <h3>Coleccion: {product.coleccion} </h3>
                                <h3>Saga: {product.saga}</h3>
                                <h3>Precio: ${product.price} </h3>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "flex-end", marginTop: "5%" }} onClick={() => changeFirstPhoto()}>
                        <button onClick={toggleModal}> Cerrar</button>
                    </div>
                </div>
            }
        </Modal>
    )
}

export default ModalComponent;