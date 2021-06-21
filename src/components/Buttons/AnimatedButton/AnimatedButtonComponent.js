import React from "react"
import { Button, Icon } from 'semantic-ui-react'
import "./AnimatedButtonStyles.css"

const AnimatedButton = (props) => (
  <div className="shopButtonStyles">  
    <Button animated='vertical' style={{backgroundColor: "#3EDBF0"}} /*onClick={goToShop()}*/>
      <Button.Content hidden><Icon name={props.icon} color="black " /></Button.Content>
      <Button.Content visible>
        {props.title}
      </Button.Content>
    </Button>
  </div>
)

export default AnimatedButton 
 