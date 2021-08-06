import React, { useState } from 'react';
import { Button, Form, TextArea } from 'semantic-ui-react';
import "semantic-ui-css/semantic.min.css"
import toast from 'react-hot-toast';
import { db } from "../../firebase/firebase"
import NavBarComponent from '../../components/NavBar/NavBarComponent';
import { useCartContext } from '../../context/CartContext'
import { Link } from "react-router-dom";
import { compressToBase64 } from 'lz-string';
// import * as firebase from 'firebase';
// import 'firebase/firestore'

// COMPONENTS

// RENDER

function OrderGenerated(props) {

    console.log(props)

    return (
        <div className="PageContainer">
            <div>
                <NavBarComponent />
            </div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: 'center', flexDirection: "column", marginTop: "15%" }}>
                <div style={{}}>
                    <h1>Compra Finalizada</h1>
                </div>
                <div className='form-container'>
                    <div style={{ flexDirection: 'row' }}>
                        <div style={{}}>
                            <h4>Id de la compra: {props.location.state.id} </h4>
                        </div>
                    </div>
                </div>

                <div>
                    <Link to="/">
                        <Button >
                            Volver
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default OrderGenerated;