import React, { useState } from 'react'
import "./NavBarStylesComponent.css"
import { Link } from 'react-router-dom'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

//Components 

import AnimatedButtonComponent from '../Buttons/AnimatedButton/AnimatedButtonComponent'
import ModalCarrito from "../ModalCarrito/ModalCarrito"
import ShopButton from '../Buttons/ShopButton/shopButton';

function NavBarComponent() {

    const [isOpen, setIsOpen] = useState(false);
    const url = window.location.href.toLowerCase()


    function toggleModal() {
        console.log(isOpen)
        setIsOpen(!isOpen);
    }

    return (
        <div className="navBarContainer">
            <ModalCarrito isOpen={isOpen} toggleModal={toggleModal} />
            <div className="title">
                <h1 className="textTitle">Jedi Collector 1971</h1>
            </div>
            <div className="options">
                <div>
                    {!(url.includes("/home")) &&
                        < div >
                            <Link to="/">
                                <AnimatedButtonComponent title="Home" icon="home" />
                            </Link>
                        </div>
                    }
                </div>
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
                    <Accordion allowZeroExpanded>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton style={{ backgroundColor: "#3EDBF0", borderRadius: "5px", textAlign: "center" }}>
                                    <AnimatedButtonComponent title="Tienda" icon="shop" />
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <Link to="/Shop">
                                <AccordionItemPanel style={{ backgroundColor: "#3EDBF0", borderRadius: "5px", marginTop: "5px", textAlign: 'center' }}>
                                    <ShopButton title="Principal" icon="shop" />
                                </AccordionItemPanel>
                            </Link>
                            <Link to="/legoShop">
                                <AccordionItemPanel style={{ backgroundColor: "#3EDBF0", borderRadius: "5px", marginTop: "5px", marginBottom: '5px', textAlign: 'center' }}>
                                    <ShopButton title="Lego" icon="shop" />
                                </AccordionItemPanel>
                            </Link>
                        </AccordionItem>
                    </Accordion>

                </div>
                <div style={{ marginLeft: "14px" }}>
                    {(url.includes("shop")) &&
                        <div onClick={() => { toggleModal() }}>
                            <AnimatedButtonComponent title="Carrito" icon="dollar" />
                        </div>
                    }
                </div>
            </div>
        </div >
    )
}

export default NavBarComponent


