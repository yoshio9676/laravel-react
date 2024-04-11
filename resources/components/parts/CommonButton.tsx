import React from 'react'
import '../../scss/parts/CommonButton.scss'

type CommonButtonProps = {
    children: JSX.Element|string;
    onClick?: () => void;
}

const CommonButton = ({ children, onClick = () => {} }: CommonButtonProps) => {
  return (
    <button
        className='common-button'
        onClick={onClick}
    >{children}</button>
  )
}

export default CommonButton