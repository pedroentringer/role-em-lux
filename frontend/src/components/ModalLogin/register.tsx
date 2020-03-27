import React from "react";
import { useTranslation } from "react-i18next";

import { Container, Form } from "./styles";
import {Input, Label} from '../Form';

import Button from '../Button';

const stylesForm = {backgroundColor: "#fafafa", border: "0.3px solid rgba(0,0,0,0.3)", width: 300}

interface Props {
  handleLogin: () => void;
}

const Register: React.FC<Props> = props => {
  const { t } = useTranslation();
  
  return (
    <Container>
      <h3>{t("register.title")}</h3>
      <Form>
        
        <Label text={t("register.form.name.label")} />
        <Input
          type="text"
          required
          placeholder={t("register.form.name.placeholder")}
          style={stylesForm}
        />

        <Label text={t("register.form.email.label")} />
        <Input
          type="email"
          required
          placeholder={t("register.form.email.placeholder")}
          style={stylesForm}
        />

        <Label text={t("register.form.phone.label")} />
        <Input
          type="phone"
          required
          placeholder={t("register.form.phone.placeholder")}
          style={stylesForm}
        />

        <Label text={t("register.form.password.label")} />
        <Input
          type="password"
          required
          placeholder={t("register.form.password.placeholder")}
          style={stylesForm}
        />

        <Label text={t("register.form.password_confirmation.label")} />
        <Input
          type="password"
          required
          placeholder={t("register.form.password_confirmation.placeholder")}
          style={stylesForm}
        />

        <Button text={t("register.form.button")} style={{width: '100%', marginTop: 30, marginBottom: 10}}/>
        <Button text={t("register.login")} onClick={props.handleLogin} style={{width: '100%', backgroundColor: "#fafafa", color: '#333'}}/>
      </Form>
    </Container>
  );
}

export default Register;
