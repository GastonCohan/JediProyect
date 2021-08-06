import React, { useState } from 'react';
import { Button, Form, TextArea } from 'semantic-ui-react';
import "semantic-ui-css/semantic.min.css"
import toast from 'react-hot-toast';
import { db } from "../../firebase/firebase"
import NavBarComponent from '../../components/NavBar/NavBarComponent';
import { useCartContext } from '../../context/CartContext'
import { Link } from "react-router-dom";
import { compressToBase64 } from 'lz-string';
import { useHistory } from "react-router-dom";
// import * as firebase from 'firebase';
// import 'firebase/firestore'

// COMPONENTS

// RENDER

function BuyPage() {

    const addCompra = (object) => {
        return db.collection("compras").add(object);
    };

    let history = useHistory();

    // compras.add(newCompra).then(({ id }) => {
    //     setOrder(id); // SUCCESS
    // }).catch(err => {
    //     setError(err); // ERROR
    // })
    // }

    const totalPrice = () => cart.reduce((acc, item) => {
        return acc + item.price * item.quantity
    }, 0);

    const { cart, clearCart } = useCartContext();

    // const date = () => {
    //     return firebase.firestore.Timestamp.fromDate(new Date())
    // }

    const notify = () => toast('Finalizaste la compra con éxito');
    const notify2 = () => toast('Ocurrio un error en la compra');

    const initialState = {
        name: '',
        lastname: '',
        email: '',
        comments: '',
        home: ''
    };

    const [values, setValues] = useState(initialState);
    const [compraFinalizada, setCompraFinalizada] = useState(false);
    console.log("compraFinalizada", compraFinalizada)

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };


    const handleOnSubmit = async (e) => {
        try {
            e.preventDefault();
            const { id } = await addCompra({ ...values, cart: cart.map(({ id, title, quantity }) => ({ id, title, quantity })) });
            await updateStock()
            console.log("id compra", id)
            setValues({ ...initialState });
            notify()
            clearCart()
            history.push("/OrderGenerated", { id });
        } catch (e) {
            notify2()
        }
    };

    const updateStock = () => {
        cart.forEach(item => {
            const docRef = db.collection("products").doc(item.id);
            const docRef2 = db.collection("legoProducts").doc(item.id);
            docRef.update({ stock: item.stock - item.quantity })
            docRef2.update({ stock: item.stock - item.quantity })
        })
    }

    const allFildsComplete = () => {
        if (values.name !== "" && values.lastname !== "" && values.email !== "") {
            return false
        } else {
            return true
        }
    }

    return (
        <div className="PageContainer">
            <div>
                <NavBarComponent />
            </div>
            <div style={{ display: "flex", justifyContent: "center", marginTop: '5%' }}>
                <h1>Finalizar Compra</h1>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div className='form-container'>
                    <Form onSubmit={handleOnSubmit}>
                        <Form.Field>
                            <input
                                placeholder='Nombre'
                                onChange={handleOnChange}
                                name='name'
                                value={values.name}
                            />
                        </Form.Field>
                        <Form.Field>
                            <input
                                placeholder='Apellido'
                                onChange={handleOnChange}
                                name='lastname'
                                value={values.lastname}
                            />
                        </Form.Field>
                        <Form.Field>
                            <input
                                placeholder='Email'
                                onChange={handleOnChange}
                                name='email'
                                value={values.email}
                            />
                        </Form.Field>
                        <Form.Field>
                            <input
                                placeholder='Domicilio'
                                onChange={handleOnChange}
                                name='home'
                                value={values.home}
                            />
                        </Form.Field>
                        <Form.Field>
                            <TextArea
                                placeholder='Comentarios (opcional)'
                                onChange={handleOnChange}
                                name='comments'
                                value={values.comments}
                            />
                        </Form.Field>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: "center", flexDirection: "column" }}>
                            <h4 style={{ display: 'flex', justifyContent: 'center', alignItems: "center", flexDirection: "column" }}>
                                Productos:  {cart.map((item) => (
                                    <div style={{ display: "flex", alignItems: 'center', justifyContent: "center", flexDirection: "row", marginTop: "5%" }}>
                                        <div>
                                            <h5 style={{}}>{item.quantity} </h5>
                                        </div>
                                        <div>
                                            <h5 style={{ marginLeft: "5px", marginRight: "5px" }}> - </h5>
                                        </div>
                                        <div>
                                            <h5>{item.title}</h5>
                                        </div>
                                    </div>
                                ))}
                            </h4>
                            <h4 style={{ marginTop: "0" }}>
                                Total : $ {totalPrice()}
                            </h4>
                            <h4 style={{ marginTop: "0" }}>
                                {/* Fecha : {date} */}
                            </h4>
                        </div>
                        {allFildsComplete() &&
                            <div style={{ marginTop: "2%", marginBottom: "2%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <h4 style={{ color: "red" }}>Debes completar todos los campos para poder finalizar la compra.</h4>
                            </div>
                        }

                        <Button type='submit' disabled={allFildsComplete()} primary fluid style={{ marginTop: "5%" }} >
                            Comprar
                        </Button>

                    </Form>
                </div>
            </div>
        </div>
    );
}

export default BuyPage;