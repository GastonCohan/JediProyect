import React, { useState } from 'react';
import { Button, Form, TextArea } from 'semantic-ui-react';
import "semantic-ui-css/semantic.min.css"
import toast from 'react-hot-toast';
import { db } from "../../firebase/firebase"
import NavBarComponent from '../../components/NavBar/NavBarComponent';
import { useCartContext } from '../../context/CartContext'
import { Link } from "react-router-dom";

// COMPONENTS

// RENDER

function BuyPage() {

    const addProduct = async (object) => {
        await db.collection("compras").doc().set(object);
    };

    const totalPrice = () => cart.reduce((acc, item) => {
        return acc + item.price * item.quantity
    }, 0);

    const { cart, clearCart } = useCartContext();

    const notify = () => toast('Finalizaste la compra con éxito');

    const initialState = {
        name: '',
        lastname: '',
        email: '',
        comments: '',
        home: '',
        products: '',
        quantity: '',
    };

    const [values, setValues] = useState(initialState);

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };


    const handleOnSubmit = (e) => {
        e.preventDefault();
        addProduct(values);
        setValues({ ...initialState });
    };

    const allFildsComplete = () => {
        if (values.name !== "" && values.lastname !== "" && values.email !== "") {
            return false
        } else {
            return true
        }
    }

    const goToLogin = () => {
        return <Link to="/">
        </Link>
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
                        </div>
                        {allFildsComplete() &&
                            <div style={{ marginTop: "2%", marginBottom: "2%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <h4 style={{ color: "red" }}>Debes completar todos los campos para poder finalizar la compra.</h4>
                            </div>
                        }
                        <Button type='submit' disabled={allFildsComplete()} primary fluid onClick={() => { notify() && clearCart() && goToLogin() }} style={{ marginTop: "5%" }}>
                            Comprar
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default BuyPage;