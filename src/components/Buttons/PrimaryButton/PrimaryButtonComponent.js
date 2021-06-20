import React from 'react'
import { Button } from 'semantic-ui-react'

const PrimaryButton = (props) => (
  <div> 
    <Button secondary style={{backgroundColor: "#3EDBF0", color: "black"}}>{props.text}</Button>
  </div>
)

export default PrimaryButton