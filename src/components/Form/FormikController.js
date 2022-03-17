import React from 'react'
import TextFieldForm from './TextFieldForm'

const FormikController = (props) => {
  const {control,...otherProps}=props
  switch(control)
  {
      case "textfield":
          return <TextFieldForm {...otherProps}/>
          default:
              return null
  }
}

export default FormikController