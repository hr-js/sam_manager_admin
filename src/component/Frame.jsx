import React from 'react';
import Header from './Header';
import Menu from './Menu';
import Main from './Main';

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
      <Main open={isOpen}/>
    </div>
  );
}

export default Frame;
