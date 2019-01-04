import React from 'react';

import './styles.scss';

export default class TopMenu extends React.Component{
  state = {
    isActive: true
  }

  componentDidMount () {
    document.addEventListener('keypress', this.listenEventKeyPress);
  }

  componentWillUnmount () {
    document.removeEventListener('keypress', this.listenEventKeyPress);
  }

  listenEventKeyPress = (e) => {
    if (e.key === '`') {
      this.setState({isActive: !this.state.isActive});
    }
  }

  render () {
    const {
      isActive
    } = this.state;
    
    return (
      <div id="menu" className={`TopMenu row m-0 align-items-center ${isActive &&'TopMenu__active'}`}>
        <div className="p-2">
          <img src="static/images/logo.png" alt="fozg.net" width="35"/>
        </div>
        <div className="col d-flex justify-content-end m-2">
          <div className="row">

          </div>
        </div>
      </div>
    )
  }
}