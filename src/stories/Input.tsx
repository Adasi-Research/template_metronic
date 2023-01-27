import React, {useState} from 'react'
import clsx from 'clsx'
import {Form} from 'react-bootstrap'

interface InputProps {
  /**
   * Input placeholder
   */
  placeholder: string
  /**
   * Optional click handler
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  /*
   * Optional value prop
   * */
  value?: string
  classprops: string
  type: string
}

const Input = ({type, onChange, placeholder, classprops, ...props}: InputProps) => {
  const [inputValue, setInputValue] = useState('')

  return (
    <input
      type='email'
      onChange={(e) => setInputValue(e.target.value)}
      value={inputValue}
      placeholder={placeholder}
      className={clsx(`form-control ${classprops}`)}
      name='email'
      autoComplete='off'
    />
  )
}

export default Input
