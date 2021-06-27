import React, { useState } from 'react'
import "./NavBarStylesComponent.css"
import { Link } from 'react-router-dom'
import { Modal, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'


//Components 

import AnimatedButtonComponent from '../Buttons/AnimatedButton/AnimatedButtonComponent'

// Const

const useStyles = makeStyles((theme) => ({
    modal: {
        position: 'absolute',
        width: 400,
        backgroundColor: 'white',
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: "16px 32px 24px",
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    }
}))



function NavBarComponent() {
    const url = window.location.href.toLowerCase()
    const styles = useStyles();

    const [modal, setModal] = useState(false)

    const abrirCerrarModal = () => {
        setModal(!modal)
    }

    console.log(url)

    const body = (
        <div className={styles.modal}>
            <div align="center">
                <h2>Carrito</h2>
            </div>
            <div>
                <Button>Comprar </Button>
                <Button onClick={() => abrirCerrarModal()}> Cancelar </Button>
            </div>
        </div>
    )

    return (
        <div className="navBarContainer">
            <div className="title">
                <h1 className="textTitle">Jedi Collector 1971</h1>
            </div>
            <div className="options">
                {!(url.includes("signin") || url.includes("register") || url.includes("recoverpassword") || url.includes("recoverpasswordsucced")) &&
                    <div style={{ marginLeft: "10px" }} >
                        <Link to="/SignIn">
                            <AnimatedButtonComponent icon="sign in" title="Ingresar" />
                        </Link>
                    </div>
                }
                <div style={{ marginLeft: "10px" }}>
                    <a href="https://www.instagram.com/yoda.1971/?hl=es-la" target="blanck"><AnimatedButtonComponent icon="instagram" title="Instagram" /></a>
                </div>
                <div style={{ marginLeft: "10px" }}>
                    <AnimatedButtonComponent title="Carrito" icon="shop" onClick={() => abrirCerrarModal()} />
                    <Modal
                        open={modal}
                        onClose={abrirCerrarModal}>
                        {body}
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default NavBarComponent


