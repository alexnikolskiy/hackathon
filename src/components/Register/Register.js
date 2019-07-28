import React, { PureComponent } from 'react';
import { Form, Field as FormField, ErrorMessage } from 'formik';
import { Field, Label, Control } from 'react-bulma-components/lib/components/form';
import Hero from 'react-bulma-components/lib/components/hero';
import Container from 'react-bulma-components/lib/components/container';
import Button from 'react-bulma-components/lib/components/button';
import Box from 'react-bulma-components/lib/components/box';
import Heading from 'react-bulma-components/lib/components/heading';
import Level from "react-bulma-components/lib/components/level";
import { Link } from "react-router-dom";

class Register extends PureComponent {
  render() {
    return (
      <Hero.Body>
        <Container>
          <Box>
            <Heading spaced>Регистрация</Heading>
            <Form>
              <Field>
                <Label>Имя</Label>
                <Control>
                  <FormField className="input" type="text" name="name" placeholder="Имя" />
                </Control>
                <p className="has-text-danger"><ErrorMessage name="name"/></p>
              </Field>
              <Field>
                <Label>E-mail</Label>
                <Control>
                  <FormField className="input" type="text" name="email" placeholder="E-mail" />
                </Control>
                <p className="has-text-danger"><ErrorMessage name="email"/></p>
              </Field>
              <Field>
                <Label>Пароль</Label>
                <Control>
                  <FormField className="input" type="password" name="password" placeholder="Пароль" />
                </Control>
                <p className="has-text-danger"><ErrorMessage name="password"/></p>
              </Field>
              <Level>
                <Level.Side align="left">
                  <Level.Item>
                    <Button type="submit" color="info">
                      Зарегистрироваться
                    </Button>
                  </Level.Item>
                </Level.Side>
                <Level.Side align="right">
                  <Level.Item>
                    <Link className="has-text-info" to="/login">Войти</Link>
                  </Level.Item>
                </Level.Side>
              </Level>
            </Form>
          </Box>
        </Container>
      </Hero.Body>
    );
  }
}

export default Register;
