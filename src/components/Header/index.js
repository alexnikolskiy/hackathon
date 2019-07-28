import React, { Component } from 'react';
import { connect } from "react-redux";
import User from "../User";
import Points from "../Points";
import './index.scss';

class Header extends Component {
  render() {
    const { name = 'Гость', totalPoints = 0 } = this.props.user;

    return (
      <div className="header">
        <User username={name} />
        <Points total={totalPoints} />
      </div>
    );
  }
}

export default connect(state => ({
  user: state.user
}))(Header);
