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
      <div id="menu" className={`TopMenu ${isActive &&'TopMenu__active'}`}>
        <div className=" container p-2 justify-content-between align-items-center row">
          <div>
            <img src="static/images/logo.png" alt="fozg.net" width="35"/>
          </div>
          <div className="align-items-center">
            <a href="https://github.com/fozgdotnet" target="_blank" className="TopMenu__linkItem">
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    )
  }
}