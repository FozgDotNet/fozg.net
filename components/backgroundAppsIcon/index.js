import React from 'react';

import appList, {appsList} from '../appList';

import './styles.scss';

export default () => <div className="bgAppIcons">
  {
    appsList.concat(appsList).map((item, i) => <IconItem iconUrl={item.iconUrl} key={i} />)
  }
</div>

class IconItem extends React.Component {
 
  state = {
    top: Math.floor(Math.random() * 90),
    left: Math.floor(Math.random() * 90),
    width: Math.random() * 4 + 4,
    opacity: Math.random() / 4 // almost unseen
  }

  componentDidMount () {
    this.loop();
  }

  loop = () => {
    this.currentTimeoutTime = (Math.floor(Math.random() * 20) + 6) * 300; 
    setTimeout(() => {
      this.setState({opacity: 0})
      setTimeout(() => {
        this.updatePosition();
        this.loop();  
      }, this.currentTimeoutTime + 1100);
    }, this.currentTimeoutTime );
  }
  
  updatePosition = () => {
    this.setState({
      top: Math.floor(Math.random() * 90),
      left: Math.floor(Math.random() * 90),
      width: Math.random() * 3 + 1,
      opacity: Math.random() ,
    })
  }

  render () {
    const {top, left, opacity, width} = this.state;
    const {iconUrl} = this.props;
    return (
      <div src={iconUrl} className="rounded-circle bgAppIcons__item"
        style={{
          top: `${top}%`, left: `${left}%`, position: 'absolute',
          opacity, 
          width: `${width}em`,  
          height: `${width}em`,  
          filter: `blur(${width - 5}px)`,
          backgroundImage: `url(${iconUrl})`,
          backgroundSize: 'cover'
        }}/>
    )
  }
}