import React from 'react'
import { Button } from 'semantic-ui-react'

const PrimaryButton = (props) => (
  <div>
    <Button secondary disabled={props.disabled} style={{ backgroundColor: "black", color: "white", width: "250px", borderRadius: "10px" }}>{props.text}</Button>
  </div >
)

export default PrimaryButton