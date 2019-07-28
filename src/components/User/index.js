import React from 'react';
import userLogo from './user.svg';
import './index.scss';

const User = (props) => {
  const { username } = props;

  return (
    <div className="user">
      <img className="user__icon" src={userLogo} width={22} height={22}/>
      {username}
    </div>
  );
};

export default User;
