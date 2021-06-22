import { CoverageMap } from "istanbul-lib-coverage";
import React from "react";
import "semantic-ui-css/semantic.min.css"

// COMPONENTS

import NavBarComponent from "../NavBar/NavBarComponent";

// RENDER

function SignInScreen() {
  return (
        <div style={{ 
            backgroundImage: `url("https://img.wallpapersafari.com/desktop/1536/864/18/32/uzH4Mq.jpg")`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: "cover",
            height: "100vh",
        }}>
            <div style={{}}>
                <NavBarComponent/>
            </div>
            <div >

            </div>
        </div>
  );
}

export default SignInScreen;