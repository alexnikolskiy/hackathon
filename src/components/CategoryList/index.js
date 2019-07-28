import React, { Component } from 'react';
import Tile from 'react-bulma-components/lib/components/tile';
import Category from '../Category';
import './index.scss';

class CategoryList extends Component {
  render() {
    const { categories = [] } = this.props;
    const elements = categories.map(category => <Category key={category.id} {...category} />);

    return (
      <Tile className="categories" kind="ancestor">
        {elements}
      </Tile>
    );
  }
}

export default CategoryList;
