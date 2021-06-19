import React from 'react'
import "./CuerpoComponentStyles.css"

// RENDER 

const CuerpoComponent = () => (
  <div className="bodyStyle" style={{  
    backgroundImage: "url(" + "https://images2.alphacoders.com/785/785330.jpg" + ")",
    backgroundSize: 'cover',
    height: "720px"
  }}> 
   <h1>Hola</h1>
  </div>
)

export default CuerpoComponent