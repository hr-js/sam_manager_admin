import React from 'react';
import Header from './Header';
import Menu from './Menu';

function Frame(props) {
  const { isOpen, onClick, items } = props;
  return (
    <Header onClick={onClick}>
      <Menu open={isOpen} items={items} />
    </Header>
  );
}

export default Frame;
