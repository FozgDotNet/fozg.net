import './styles.scss';

export default () => (
  <div className="text-center header">
    <div className="container">
      <div className="header__main">
        <div className="header_logo">
          {/* <img src="static/images/logo.png" alt="fozg.net"/> */}
        </div>
        <h1 className='intro__h1'>Hi,</h1>
        <h2 className="intro__h2">I'm Phong, a Full-stack Javascript developer live in Hanoi. 
          I like to <a href="https://github.com/fozg"><strong>code</strong></a>, 
          making and designing <a href="https://fozg.net"><strong>things</strong></a> when freetime.
          I'm also starting a new <a href="https://fozg.net/blog"><strong>blog</strong></a> about 
          the Web technologies and some things around. </h2>
        <br />
        {/* <a className="btn btn-dark btn-sm">Read more</a> */}
      </div>
    </div>
  </div>
) 