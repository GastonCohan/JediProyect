import React from 'react'
import { Button } from 'semantic-ui-react'

const PrimaryButton = (props) => (
  <div> 
    <Button secondary style={{backgroundColor: "black", color: "white", width:"220px", borderRadius:"10px"}}>{props.text}</Button>
  </div>
)

export default PrimaryButton