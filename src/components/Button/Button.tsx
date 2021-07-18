import React from 'react'
import { ButtonProps } from "./ButtonProps";
import { Wrraper } from './styled'

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <Wrraper onClick={onClick}>{children}</Wrraper>
  )
}

export default Button;