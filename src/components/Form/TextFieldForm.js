import { TextField } from '@mui/material'
import React from 'react'

const TextFieldForm = ({name,label,...otherProps}) => {
    const textFieldConfig={
        size:"small",
        fullWidth:true,
        variant:"outlined",
        ...otherProps
    }
  return (
   <>
   <TextField {...textFieldConfig} name={name} label={label}/>
   </>
  )
}

export default TextFieldForm