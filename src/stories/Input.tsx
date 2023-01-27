import React from 'react'

interface InputProps {
  /**
   * Input placeholder
   */
  placeholder: string
  /**
   * Optional click handler
   */
  onChange?: () => void
  /*
   * Optional value prop
   * */
  value?: string
}

const Input = ({value, onChange, placeholder, ...props}: InputProps) => {
  return <input value={value} placeholder={placeholder} />
}

export default Input
