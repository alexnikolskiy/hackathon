import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Field as FormField, ErrorMessage } from 'formik';
import { Input, Field, Label, Control } from 'react-bulma-components/lib/components/form';
import Hero from 'react-bulma-components/lib/components/hero';
import Container from 'react-bulma-components/lib/components/container';
import Button from 'react-bulma-components/lib/components/button';
import Box from 'react-bulma-components/lib/components/box';
import Heading from 'react-bulma-components/lib/components/heading';
import Level from 'react-bulma-components/lib/components/level';
import { Link, Redirect } from 'react-router-dom';

class Login extends Component {
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    const { isLogged } = nextProps;

    if (!this.props.isLogged && isLogged)  {
      return true;
    }

    return false;
  }

  render() {
    const { isLogged } = this.props;

    if (isLogged) {
      return <Redirect to="/" />;
    }

    return (
      <Hero.Body>
        <Container>
          <Box>
            <Heading spaced>Авторизация</Heading>
            <Form>
              <Field>
                <Label>E-mail</Label>
                <Control>
                  <FormField className="input" type="text" name="email" placeholder="E-mail" />
                </Control>
                <ErrorMessage name="email" />
              </Field>
              <Field>
                <Label>Пароль</Label>
                <Control>
                  <FormField className="input" type="password" name="password" placeholder="Пароль" />
                </Control>
                <ErrorMessage name="password" />
              </Field>
              <Level>
                <Level.Side align="left">
                  <Level.Item>
                    <Button type="submit" color="info">
                      Войти
                    </Button>
                  </Level.Item>
                </Level.Side>
                <Level.Side align="right">
                  <Level.Item>
                    <Link className="has-text-info" to="/register">Зарегистрироваться</Link>
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

export default connect(state => ({
  isLogged: state.user.isLogged
}))(Login);
