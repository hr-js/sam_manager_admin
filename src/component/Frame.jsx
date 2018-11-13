import React from 'react';
import Header from './Header';
import Menu from './Menu';

function Frame(props) {
  const { open, onClick, items } = props;
  return (
    <div>
      <Header onClick={onClick} open={open} />
      <Menu
        open={open}
        items={items}
        onClick={onClick}
      />
    </div>
  );
}

export default Frame;
