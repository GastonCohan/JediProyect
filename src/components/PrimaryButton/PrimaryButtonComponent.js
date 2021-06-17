import React from 'react'
import { Button } from 'semantic-ui-react'

const PrimaryButton = (props) => (
  <div> 
    <Button secondary>{props.text}</Button>
  </div>
)

export default PrimaryButton