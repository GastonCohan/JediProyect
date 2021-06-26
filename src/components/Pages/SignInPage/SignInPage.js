import React from "react";
import "semantic-ui-css/semantic.min.css"

// COMPONENTS

import NavBarComponent from "../../NavBar/NavBarComponent";
import PrimaryButtonComponent from "../../Buttons/PrimaryButton/PrimaryButtonComponent"
import { Link } from "react-router-dom";

// RENDER

function SignInScreen() {
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
                            <div style={{display:"flex", justifyContent:"center", alignItems:'center'}}>
                                <h2 style={{color: "white", marginTop:"10%", fontFamily: "monospace" }}>Iniciar Sesion</h2>
                            </div>
                            <div style={{marginTop:"10%", marginLeft:"10%"}}>
                                <div style={{display:"flex", flexDirection:"row", justifyContent:"center", marginRight:"10%"}}>
                                    <h3 style={{color:"white"}}>Usuario: </h3>
                                    <input type="text" style={{height:"6%", marginLeft:"13%"}}/>
                                </div>
                                <div style={{display:"flex", flexDirection:"row",justifyContent:"center", marginTop:"3%", marginRight:"10%"}}>
                                    <h3 style={{color:"white"}}>Contraseña: </h3>
                                    <input type="text" style={{height:"5%", marginLeft:"5%"}}/>
                                </div>
                            </div> 
                            <div style={{display:"flex", flexDirection:"row",justifyContent:"center", marginTop:"3%"}}>
                                <a href="/RecoverPassword"> <h3 style={{color:"white", fontSize:"100%"}}>Olvide mi Contraseña</h3></a>
                            </div>   
                            
                            <div>
                                <div style={{marginTop:"5%", display:"flex", justifyContent:"center"}}>
                                <Link to="/">
                                    <PrimaryButtonComponent text="Ingresar."/>
                                </Link>    
                                </div>
                                <div style={{marginTop:"5%", display:"flex", justifyContent:"center"}}>
                                    <Link to="/Register">
                                        <PrimaryButtonComponent text="¿No tiénes cuenta? Regístrate."/>
                                    </Link>
                                </div>
                                <div style={{marginTop:"5%", display:"flex", justifyContent:"center"}}>
                                    <Link to="/"> 
                                        <PrimaryButtonComponent text="Volver."/>
                                    </Link>
                                </div>
                            </div>
                        </div>
            </div>
        </form>
  );
}

export default SignInScreen;

