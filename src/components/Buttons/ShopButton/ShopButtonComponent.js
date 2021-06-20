import React from "react"
import { Button, Icon } from 'semantic-ui-react'
import "./ShopButtonStyles.css"

const ShopButtonComponent = (props) => (
  <div className="shopButtonStyles">  
    <Button animated='vertical' style={{backgroundColor: "#3EDBF0"}} /*onClick={goToShop()}*/>
      <Button.Content hidden>{props.title}</Button.Content>
      <Button.Content visible>
        <Icon name='shop' color="black " />
      </Button.Content>
    </Button>
  </div>
)

export default ShopButtonComponent 
 