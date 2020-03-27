import React, {CSSProperties} from "react";

import { InputStyled, TextareaStyled, LabelStyled } from "./styles";

interface InputProps {
  type?: string;
  required?: boolean
  placeholder: string;
  style?: CSSProperties;
  onChange?: (value:string) => void;
}

interface TextareaProps {
  rows?: number;
  required?: boolean;
  placeholder: string;
  style?: CSSProperties;
  onChange?: (value:string) => void;
}

interface LabelProps {
  text: string;
}

export const Input: React.FC<InputProps> = ({type = 'text', required = false, placeholder, style, onChange}) =>
  <InputStyled type={type} placeholder={placeholder} required={required} style={style} onChange={(e) => { if(onChange) onChange(e.target.value)}}/>

export const Textarea: React.FC<TextareaProps> = ({rows = 2, required = false, placeholder, style, onChange}) =>
  <TextareaStyled rows={rows} placeholder={placeholder} required={required} style={style} onChange={(e) => { if(onChange) onChange(e.target.value)}} />

export const Label: React.FC<LabelProps> = ({text}) =>
  <LabelStyled>{text}</LabelStyled>
