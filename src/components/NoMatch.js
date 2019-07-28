import React from 'react';
import Hero from 'react-bulma-components/lib/components/hero';
import Container from 'react-bulma-components/lib/components/container';
import Heading from 'react-bulma-components/lib/components/heading';
import Notification from 'react-bulma-components/lib/components/notification';

const NoMatch = ({ location }) => {
  return (
    <Hero.Body>
      <Container>
        <Notification color="warning">
          <Heading spaced>ERROR 404</Heading>
          <Heading subtitle>
            No match for <code>{location.pathname}</code>
          </Heading>
        </Notification>
      </Container>
    </Hero.Body>
  );
};

export default NoMatch;
