import React from 'react';
import Header from './Header';
import Menu from './Menu';

function Frame(props) {
  const { isOpen, onClick } = props;
  return (
    <Header onClick={onClick}>
      <Menu  open={isOpen} />
    </Header>
  );
}

export default Frame;
