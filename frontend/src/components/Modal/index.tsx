import React, { useEffect, useState } from "react";
import { Main, Background, Container, Card } from "./styles";

interface Props {
  onClose?: () => void;
}

const Modal: React.FC<Props> = props => {
  const [style, setStyle] = useState({});

  useEffect(() => {
    setStyle({ opacity: 1 });
    const body = document.getElementsByTagName('body')[0]
    body.style.overflowY = 'hidden';
  }, []);

  const handleClose = (): void => {
    setStyle({ opacity: 0 });
    
    const body = document.getElementsByTagName('body')[0]
    body.style.overflowY = 'scroll';
    
    setTimeout(() => {
      if (props.onClose) props.onClose();
    }, 1000);
  };

  return (
    <Main style={style}>
      <Background onClick={handleClose} />
      <Container>
        <Card>{props.children}</Card>
      </Container>
    </Main>
  );
};

export default Modal;
