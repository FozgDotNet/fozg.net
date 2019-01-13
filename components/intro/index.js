import './styles.scss';
import BgAppIcons from '../backgroundAppsIcon';

export default () => (
  <div className="text-center header">
    <BgAppIcons />
    <div className="container">
      <div className="header__main">
        {/* <img src="static/images/logo.png" alt="fozg.net" className="pb-3" width="100" /> */}
        <h1 className='intro__h1'>Hi,</h1>
        <h2 className="intro__h2">I'm Phong, a Web developer live in Hanoi.</h2>
        <h2 className="intro__h2">I like to <a href="https://github.com/fozg">code</a>, making and designing <a href="https://fozg.net">things</a> when freetime.</h2>
        <h2 className="intro__h2">I'm also starting a new <a href="https://fozg.net/blog">blog</a> (currently not ready) about the Web technologies and some things around. </h2>
        <br />
        <a className="btn btn-dark btn-sm">Read more</a>
      </div>
    </div>
  </div>
) 