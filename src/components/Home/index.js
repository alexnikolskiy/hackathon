import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserInfo, getCategories } from '../../AC';
import { Redirect } from 'react-router-dom';
import Hero from 'react-bulma-components/lib/components/hero';
import Container from 'react-bulma-components/lib/components/container';
import CategoryList from '../CategoryList';
import Header from '../Header';
import Loader from '../Loader/index';
import TestCard from '../TestCard/index';
import Welcome from "../Welcome";

class Home extends Component {
  componentDidMount() {
    const { getUserInfo } = this.props;

    getUserInfo();

  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { isLogged, isLoadingUser, getCategories } = prevProps;

    if ((!isLogged && this.props.isLogged) || (isLoadingUser && !this.props.isLoadingUser)) {
      getCategories();
    }
  }

  render() {
    const {
      isLogged,
      isLoadingUser,
      isLoadingCategory,
      categories,
      activeCategory
    } = this.props;

    console.log('Home');

    if (!isLogged && !isLoadingUser) {
      return <Redirect to="/login" />;
    }

    return (
      <React.Fragment>
        {/*<Welcome />*/}
        <Hero.Head>
          <Header />
        </Hero.Head>
        <Hero.Body style={{overflow: 'hidden'}}>
          <Container className="has-text-centered">
            {isLoadingUser || isLoadingCategory ? (
              <Loader />
            ) : !activeCategory ? (
              <CategoryList categories={categories} />
            ) : (
              <TestCard categoryId={activeCategory} />
            )}
          </Container>
        </Hero.Body>
      </React.Fragment>
    );
  }
}

export default connect(
  state => ({
    isLogged: state.user.isLogged,
    isLoadingUser: state.user.isLoading,
    isLoadingCategory: state.categories.isLoading,
    categories: state.categories.entities,
    activeCategory: state.categories.active,
  }),
  { getUserInfo, getCategories },
)(Home);
