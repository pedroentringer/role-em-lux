import React from "react";
import { useTranslation } from "react-i18next";

import { Container, Form } from "./styles";
import {Input, Label} from '../Form';

import Button from '../Button';

const stylesForm = {backgroundColor: "#fafafa", border: "0.3px solid rgba(0,0,0,0.3)", width: 300}

interface Props {
  handleRegister: () => void
}

const Login: React.FC<Props> = props => {
  const { t } = useTranslation();
  
  return (
    <Container>
      <h3>{t("login.title")}</h3>
      <Form>
        <Label text={t("login.form.email.label")} />
        <Input
          type="email"
          required
          placeholder={t("login.form.email.placeholder")}
          style={stylesForm}
        />
        <Label text={t("login.form.password.label")} />
        <Input
          type="password"
          required
          placeholder={t("login.form.password.placeholder")}
          style={stylesForm}
        />
        <Button text={t("login.form.button")} style={{width: '100%', marginTop: 30, marginBottom: 10}}/>
        <Button text={t("login.register")} onClick={props.handleRegister} style={{width: '100%', backgroundColor: "#fafafa", color: '#333'}}/>
      </Form>
    </Container>
  );
}

export default Login;
