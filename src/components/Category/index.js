import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCategory } from '../../AC';
import Tile from 'react-bulma-components/lib/components/tile';
import Heading from 'react-bulma-components/lib/components/heading';
import Box from 'react-bulma-components/lib/components/box';
import Button from 'react-bulma-components/lib/components/button';
import Media from 'react-bulma-components/lib/components/media';
import './index.scss';

class Category extends Component {
  handleClick = () => {
    const { id, setCategory } = this.props;
    setCategory(id);
  };

  render() {
    const { name, image } = this.props;

    return (
      <Tile className="category" kind="parent" size={4}>
        <Box className="category__container">
          <Tile className="category__content" renderAs="article" kind="child">
            <Media className="category__header">
              <Media.Item renderAs="figure" position="left">
                <img src={`./img/${image}`} alt="" width={50} height={50} />
              </Media.Item>
              <Media.Item>
                <Heading className="category__title" size={5}>
                  {name}
                </Heading>
              </Media.Item>
            </Media>
            <Button onClick={this.handleClick} color="info">Начать</Button>
          </Tile>
        </Box>
      </Tile>
    );
  }
}

export default connect(null, { setCategory })(Category);
