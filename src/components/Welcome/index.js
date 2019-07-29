import React, { Component } from 'react';
import Modal from 'react-bulma-components/lib/components/modal';
import Section from 'react-bulma-components/lib/components/modal';

class Welcome extends Component {
  state = {
    show: true
  };

  handleClose = () => {
    this.setState(state => ({
        show: !state.show
      })
    )
  };

  render() {
    return (
      <Modal show={this.state.show} onClose={this.handleClose}>
        <Modal.Content>
          <Section style={{ backgroundColor: 'white' }}>
            Hello World;
          </Section>
        </Modal.Content>
      </Modal>
    );
  }
}

export default Welcome;
