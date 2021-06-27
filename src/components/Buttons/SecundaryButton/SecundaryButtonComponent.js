import React from 'react'
import { Button } from 'semantic-ui-react'

const SecundaryButton = (props) => (
  <div>
    <Button primary style={{ backgroundColor: "white", color: "black", width: "250px", borderRadius: "10px" }}>{props.text}</Button>
  </div>
)

export default SecundaryButton