import React from "react";
import "semantic-ui-css/semantic.min.css"

// COMPONENTS

import NavBarComponent from "../../NavBar/NavBarComponent";
import PrimaryButtonComponent from "../../Buttons/PrimaryButton/PrimaryButtonComponent"
import { Link } from "react-router-dom";

// RENDER

function RegisterScreen() {
  return (
            <div style={{ 
                backgroundImage: `url("https://images.alphacoders.com/107/thumb-1920-107763.jpg")`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: "cover",
                height: "100vh",
            }}>
                    <NavBarComponent/>
                        <div style={{backgroundColor: "white", height:"68%", width: "30%", marginTop: "6%", marginLeft:"10%", borderRadius: "5%", backgroundImage: `url("https://www.esa.int/var/esa/storage/images/19716864-11-eng-GB/ESA_root_pillars.jpg")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: "cover",}}>
                            <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
                                <h2 style={{color: "white", marginTop:"7%", fontFamily: "monospace" }}>Registrate</h2>
                                    <form style={{marginRight:"10%"}}>
                                        <div style={{display:"flex",flexDirection:"row", alignItems:"center", justifyContent:"center", marginLeft:"15%"}}>
                                            <div style={{display:"flex",flexDirection:"column", width:"100%", marginTop:"10%"}}>
                                                <h3 style={{color:"white"}}>Usuario:</h3>
                                                <h3 style={{color:"white"}}>Contraseña:</h3>
                                                <h3 style={{color:"white"}}>Repite la contraseña:</h3>
                                                <h3 style={{color:"white"}}>Email:</h3> 
                                            </div>  
                                            <div style={{display:"flex",flexDirection:"column", width:"100%", marginTop:"10%", marginRight:"3%"}}>
                                                <input type="text"/>
                                                <input type="text" style={{marginTop:"25%"}}/>
                                                <input type="text" style={{marginTop:"30%"}}/>
                                                <input type="text" style={{marginTop:"35%"}}/>
                                            </div>  
                                        </div>
                                    </form>
                                    <div style={{display:"flex",flexDirection:"row", justifyContent:"center", alignItems:"center", width:"100%", marginTop:"5%"}}>
                                        <input type="checkbox" style={{marginRight:"3%"}}/>
                                        <div style={{marginTop:"0px"}}>
                                            <h4 style={{color:"white"}}>Acepto los terminos y condiciones</h4>
                                        </div>
                                    </div>
                                    <div>
                                        <div style={{marginTop:"10%", display:"flex", justifyContent:"center"}}>
                                            <PrimaryButtonComponent text="Registrarme."/>
                                        </div>
                                        <div style={{marginTop:"5%", display:"flex", justifyContent:"center"}}>
                                            <Link to="/SignIn"> 
                                                <PrimaryButtonComponent text="¿Ya tienes una cuenta? Inicia sesión."/>
                                            </Link>
                                        </div>
                                    </div>
                            </div>
                        </div>
            </div>
        
  );
}

export default RegisterScreen;
