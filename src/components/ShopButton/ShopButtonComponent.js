import React from "react"
import { Button, Icon } from 'semantic-ui-react'
import "./ShopButtonStyles.css"

const ShopButtonComponent = (props) => (
  <div className="shopButtonStyles">  
    <Button animated='vertical' color="black">
      <Button.Content hidden>{props.title}</Button.Content>
      <Button.Content visible>
        <Icon name='shop' color="white" />
      </Button.Content>
    </Button>
  </div>
)

export default ShopButtonComponent 
 