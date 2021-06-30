import Modal from 'react-modal';

Modal.setAppElement("#root");

function ModalComponent({ isOpen, toggleModal, product }) {
    console.log("probando", product)
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
                            <div style={{ height: "112.5px", borderBottom: "1px solid", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <img src={product.image} style={{ height: "100px", width: "100px", }} />
                            </div>
                            <div style={{ height: "112.5px", borderBottom: "1px solid", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <h1>foto 2</h1>
                            </div>
                            <div style={{ height: "112.5px", borderBottom: "1px solid", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <h1>foto 3 </h1>
                            </div>
                            <div style={{ height: "112.5px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <h1>foto 4 </h1>
                            </div>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "450px", marginTop: "4%", width: "60%", border: "1px solid rgba(0, 0, 0, 1)", marginLeft: "10px" }}>
                            <img src={product.image} style={{ height: "380px", width: "380px", }} />
                        </div>
                        <div style={{ display: "flex", height: "450px", border: "1px solid rgba(0, 0, 0, 1)", marginTop: "4%", width: "30%", marginLeft: "10px", justifyContent: "center" }}>
                            <div style={{ flexDirection: "column" }}>
                                <h2 style={{ marginTop: "50px" }}>Caracterísitcas</h2>
                                <h3 style={{ marginTop: "50px" }}>Altura: </h3>
                                <h3>Peso: </h3>
                                <h3>Detalle: </h3>
                                <h3>Coleccion: </h3>
                                <h3>Saga: </h3>
                                <h3>Precio: ${product.price} </h3>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "flex-end", marginTop: "5%" }}>
                        <button onClick={toggleModal}>Cerrar</button>
                    </div>
                </div>
            }
        </Modal>
    )
}

export default ModalComponent;