import React from 'react';
import Header from './Header';
import Menu from './Menu';
import Main from '../container/Main';

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
      <Main/>
    </div>
  );
}

export default Frame;
