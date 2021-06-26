import React from "react";
import "semantic-ui-css/semantic.min.css"

// COMPONENTS

import NavBarComponent from "../../NavBar/NavBarComponent";
import PrimaryButtonComponent from "../../Buttons/PrimaryButton/PrimaryButtonComponent";
import { Link } from "react-router-dom";

// RENDER

function RecoverPassword() {
  return (
      <form>
            <div style={{ 
                backgroundImage: `url("https://images.alphacoders.com/107/thumb-1920-107763.jpg")`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: "cover",
                height: "100vh",
            }}>
                    <NavBarComponent/>
                        <div style={{backgroundColor: "white", height:"60%", width: "30%", marginTop: "6%", marginLeft:"10%", borderRadius: "5%", backgroundImage: `url("https://www.esa.int/var/esa/storage/images/19716864-11-eng-GB/ESA_root_pillars.jpg")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: "cover",}}>
                            <div style={{display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}>
                                <h2 style={{color: "white", marginTop:"7%", fontFamily: "monospace" }}>Recupera la Contraseña</h2>
                                <input type="text" placeholder="Email" style={{marginTop:"30%"}}/>
                            </div>
                            <div style={{marginTop:"5%", display:"flex", justifyContent:"center"}}>
                                <Link to="/RecoverPasswordSucced">
                                        <PrimaryButtonComponent text="Enviar email"/>
                                    </Link>
                            </div>
                            <div style={{marginTop:"5%", display:"flex", justifyContent:"center"}}>
                                    <Link to="/SignIn"> 
                                        <PrimaryButtonComponent text="Volver"/>
                                    </Link>
                            </div>        
                        </div>
                        
            </div>
        </form>
  );
}

export default RecoverPassword;
