import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css"
import { Form, Button } from 'semantic-ui-react';
import toast from 'react-hot-toast';
import { db } from "../../firebase/firebase"

// COMPONENTS

import NavBarComponent from "../../components/NavBar/NavBarComponent";
import PrimaryButtonComponent from "../../components/Buttons/PrimaryButton/PrimaryButtonComponent"
import { Link } from "react-router-dom";


// RENDER

function RegisterScreen() {

    const initialState = {
        user: "",
        email: "",
        password: "",
        passwordConfirmed: "",
    };

    const [values, setValues] = useState(initialState);
    // const [showPassword, setShowPassword] = React.useState(false);
    const notify = () => toast('Te has registrado con éxito!');



    const addProduct = async (object) => {
        // console.log('Product', object);
        await db.collection('users').doc().set(object);
        console.log('Producto agregado!');
    };



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
        if (values.user !== "" && values.password !== "" && values.passwordConfirmed !== "" && values.passwordConfirmed === values.password && values.email !== "" && validateEmail() && passwordIsValid()) {
            return false
        } else {
            return true
        }
    }

    const idemPassword = () => {
        if (values.password !== values.passwordConfirmed) {
            return false
        } else {
            return true
        }
    }

    const passwordIsntNull = () => {
        if (values.password !== '') {
            return true
        } else {
            return false
        }
    }


    const validateEmail = () => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(values.email)) {
            return true;
        }
        else {
            return false
        }
    }

    const passwordIsValid = () => {
        var pattern = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{4,}$/)

        if (pattern.test(values.password)) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <div className="PageContainer">
            <div style={{
                backgroundImage: `url("https://images.alphacoders.com/107/thumb-1920-107763.jpg")`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: "cover",
                height: "100vh",
            }}>
                <NavBarComponent />
                <div style={{}}>
                    <div style={{
                        backgroundColor: "white", height: "550px", width: "30%", marginTop: "4%", marginLeft: "10%", borderRadius: "5%", backgroundImage: `url("https://www.esa.int/var/esa/storage/images/19716864-11-eng-GB/ESA_root_pillars.jpg")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: "cover",
                    }}>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <h1 style={{ color: "white", marginTop: "10%" }}>Registro</h1>
                        </div>
                        <Form onSubmit={handleOnSubmit}>
                            <Form.Field style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "10%" }}>
                                <input
                                    placeholder='Usuario'
                                    onChange={handleOnChange}
                                    name='user'
                                    value={values.user}
                                    style={{ width: "50%", height: '10%' }}
                                />
                            </Form.Field>
                            <Form.Field style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "8%", flexDirection: "row" }}>
                                <input
                                    placeholder='Contraseña'
                                    onChange={handleOnChange}
                                    name='password'
                                    value={values.password}
                                    style={{ width: "50%", height: '10%' }}
                                />
                            </Form.Field>
                            {!passwordIsValid() && passwordIsntNull() &&
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                                    <h5 style={{ color: "yellow", marginBottom: "0px" }}>Las contraseñas debe tener como mínimo 4 caracterés,</h5>
                                    <h5 style={{ color: "yellow", marginTop: '0px' }}>una mayúscula y un número.</h5>
                                </div>}
                            <Form.Field style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "8%" }}>
                                <input
                                    placeholder='Repita la contraseña'
                                    onChange={handleOnChange}
                                    name='passwordConfirmed'
                                    value={values.passwordConfirmed}
                                    style={{ width: "50%", height: '10%' }}
                                />
                            </Form.Field>
                            {!idemPassword() &&
                                <div style={{ marginTop: "-5px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <h4 style={{ color: "yellow" }}>Las contraseñas no coinciden.</h4>
                                </div>}
                            <Form.Field style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "8%" }}>
                                <input
                                    placeholder='Email'
                                    onChange={handleOnChange}
                                    name='email'
                                    value={values.email}
                                    style={{ width: "50%", height: '10%' }}
                                />
                            </Form.Field>
                            {allFildsComplete() &&
                                <div style={{ marginTop: "5%", marginBottom: "5%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <h4 style={{ color: "yellow" }}>Debes completar todos los campos para poder registrarte.</h4>
                                </div>
                            }
                            <div style={{ marginTop: "3%", display: "flex", justifyContent: "center" }} >
                                <div>
                                    <Button secondary disabled={allFildsComplete()} type="sumbit" onClick={() => { notify() }} style={{ backgroundColor: "black", color: "white", width: "250px", borderRadius: "10px" }}>Registrarse</Button>
                                </div >
                            </div>
                            <div style={{ marginTop: "2%", display: "flex", justifyContent: "center" }}>
                                <Link to="/SignIn">
                                    <PrimaryButtonComponent text="¿Ya tienes una cuenta? Inicia sesión." />
                                </Link>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterScreen;
