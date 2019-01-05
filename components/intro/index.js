import './styles.scss';
import BgAppIcons from '../backgroundAppsIcon';

export default () => (
  <div className="text-center header">
    <BgAppIcons />
    <div className="container header__main">
      {/* <img src="static/images/logo.png" alt="fozg.net" className="pb-3" width="100" /> */}
      <h1 className='intro__h1'>Hi,</h1>
      <h2 className="intro__h2">I'm Fozg, and this is some stuffs I made </h2>
      <a className="btn btn-dark btn-sm">Read more</a>
    </div>
  </div>
)