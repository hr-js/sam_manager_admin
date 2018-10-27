import React from 'react';
import Header from './Header';
import Menu from './Menu';

function Frame(props) {
  const { isOpen, onClick, items } = props;
  return (
    <div>
      <Header onClick={onClick} open={isOpen} />
      <Menu
        open={isOpen}
        items={items}
        onClick={onClick}
      />
    </div>
  );
}

export default Frame;
