import React, {CSSProperties} from "react";
import { ButtonStyled } from "./styles";
import { FaArrowRight } from "react-icons/fa";

interface Props {
  icon?: boolean;
  text: string;
  style?: CSSProperties;
  onClick?: () => void;
}

const Button: React.FC<Props> = props => (
  <ButtonStyled onClick={props.onClick} style={props.style}>
    <span>{props.text}</span>
    {props.icon && <FaArrowRight style={{ marginLeft: 10 }} />}
  </ButtonStyled>
);

export default Button;
