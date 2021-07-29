import React from "react"
import { Button } from 'semantic-ui-react'

const ShopButton = (props) => (
    <div className="shopButtonStyles">
        <Button style={{ backgroundColor: "#3EDBF0" }} >
            {props.title}
        </Button>
    </div>
)

export default ShopButton