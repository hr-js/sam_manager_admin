import React from 'react';
import ReactDOM from 'react-dom';
import { openMenu } from '../action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Frame from '../component/Frame';

const mapStateToProps = state => {
  return {
    open: state.open,
    items: state.items
  };
};

const mapDispatchToProps = dispatch => {
  return {
    ...bindActionCreators(openMenu, dispatch),
    onClick(value) {
      dispatch(openMenu(value));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Frame);
