import React, { CSSProperties } from 'react'
import { ButtonStyled } from './styles'
import { FaArrowRight, FaCircleNotch } from 'react-icons/fa'

interface ButtonProps {
  icon?: boolean;
  loading?: boolean;
  text: string;
  style?: CSSProperties;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = props => (
  <ButtonStyled onClick={ () => { if (props.onClick) props.onClick() }} style={props.style}>
 
    {props.loading && (
      <FaCircleNotch className="spin" />
    )}

    {!props.loading && (
      <>
      <span>{props.text}</span>
      {props.icon && (<FaArrowRight style={{ marginLeft: 10 }} />)}
      </>
    )}
  </ButtonStyled>
)


export default Button;
