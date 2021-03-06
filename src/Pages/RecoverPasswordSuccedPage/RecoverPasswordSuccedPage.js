import React from "react";
import "semantic-ui-css/semantic.min.css"

// COMPONENTS

import NavBarComponent from "../../components/NavBar/NavBarComponent";
import PrimaryButtonComponent from "../../components/Buttons/PrimaryButton/PrimaryButtonComponent";
import { Link } from "react-router-dom";

// RENDER

function RecoverPasswordSucced() {
    return (
        <form>
            <div style={{
                backgroundImage: `url("https://images.alphacoders.com/107/thumb-1920-107763.jpg")`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: "cover",
                height: "100vh",
            }}>
                <NavBarComponent />
                <div style={{
                    backgroundColor: "white", height: "60%", width: "30%", marginTop: "6%", marginLeft: "10%", borderRadius: "5%", backgroundImage: `url("https://www.esa.int/var/esa/storage/images/19716864-11-eng-GB/ESA_root_pillars.jpg")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: "cover",
                }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                        <h2 style={{ color: "white", marginTop: "7%", fontFamily: "monospace" }}>Email enviado con Exito!</h2>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "43%" }}>
                        <Link to="/SignIn">
                            <PrimaryButtonComponent text="Iniciar Sesion" />
                        </Link>
                    </div>
                </div>

            </div>
        </form>
    );
}

export default RecoverPasswordSucced;
