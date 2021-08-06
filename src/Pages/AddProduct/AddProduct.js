
import React, { useState } from 'react';
import { Button, Form, TextArea } from 'semantic-ui-react';
import "semantic-ui-css/semantic.min.css"
import './AddProductStyles.css'
import toast from 'react-hot-toast';
import { db } from "../../firebase/firebase"

// COMPONENTS

// RENDER

function AddProduct(props) {

    const addProduct = async (object) => {
        // console.log('Product', object);
        await db.collection(props.firebaseCollection).doc().set(object);
        console.log('Producto agregado!');
    };

    const notify = () => toast('Agregaste el producto con Exito!');

    const initialState = {
        title: '',
        price: '',
        stock: 0,
        height: '',
        weight: '',
        collection: '',
        saga: '',
        descripcion: '',
        img1: '',
    };

    const [values, setValues] = useState(initialState);

    const handleOnChange = (e) => {
        const { name, value, type } = e.target;
        setValues({ ...values, [name]: type === "number" ? +value : value });
    };


    const handleOnSubmit = (e) => {
        e.preventDefault();
        addProduct(values);
        setValues({ ...initialState });
    };

    const allFildsComplete = () => {
        if (values.title.length !== "" && values.price !== 0 && values.stock !== 0 && values.height !== 0 && values.height !== 0 && values.collection !== "" && values.saga !== "" && values.img1 !== "" && values.descripcion !== "") {
            return false
        } else {
            return true
        }
    }

    return (
        <div className="PageContainer">
            <div style={{ display: "flex", justifyContent: "center", marginTop: '5%' }}>
                <h1>Agregar producto a la Tienda</h1>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div className='form-container'>
                    <Form onSubmit={handleOnSubmit}>
                        <Form.Field>
                            <input
                                placeholder='Nombre del producto'
                                onChange={handleOnChange}
                                name='title'
                                value={values.title}
                            />
                        </Form.Field>
                        <Form.Field>
                            <input
                                type="number"
                                placeholder='Precio en pesos argentinos'
                                onChange={handleOnChange}
                                name='price'
                                value={values.price}
                            />
                        </Form.Field>
                        <Form.Field>
                            <input
                                type="number"
                                placeholder='Stock'
                                onChange={handleOnChange}
                                name='stock'
                                value={values.stock}
                                min="0"
                            />
                        </Form.Field>
                        <Form.Field>
                            <input
                                type="number"
                                placeholder='Altura en centimetros'
                                onChange={handleOnChange}
                                name='height'
                                value={values.height}
                            />
                        </Form.Field>
                        <Form.Field>
                            <input
                                type="number"
                                placeholder='Peso en kilogramos'
                                onChange={handleOnChange}
                                name='weight'
                                value={values.weight}
                            />
                        </Form.Field>
                        <Form.Field>
                            <input
                                placeholder='Coleccion'
                                onChange={handleOnChange}
                                name='collection'
                                value={values.collection}
                            />
                        </Form.Field>
                        <Form.Field>
                            <input
                                placeholder='Saga'
                                onChange={handleOnChange}
                                name='saga'
                                value={values.saga}
                            />
                        </Form.Field>
                        <Form.Field>
                            <input
                                placeholder='Primera imagen'
                                onChange={handleOnChange}
                                name='img1'
                                value={values.img1}
                            />
                        </Form.Field>
                        <Form.Field>
                            <TextArea
                                placeholder='Descripcion'
                                onChange={handleOnChange}
                                name='descripcion'
                                value={values.descripcion}
                            />
                        </Form.Field>
                        {allFildsComplete() &&
                            <div style={{ marginTop: "2%", marginBottom: "2%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <h4 style={{ color: "red" }}>Debes completar todos los campos para poder guardar el producto.</h4>
                            </div>
                        }
                        <Button type='submit' disabled={allFildsComplete()} primary fluid onClick={() => notify()}>
                            Guardar
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default AddProduct;