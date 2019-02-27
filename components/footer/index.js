import './styles.scss';
import LinkedInLogo from './logoLinkedIn';
import HeartLogo from './heart';
import LogoEmail from './logoEmail';

export default () => (
  <>
  <div className="Footer">
    <div className="container row align-items-center justify-content-center ">
      {
        Socials.map((item, idx) => (
          <a href={item.link} target="_blank" className="Footer__socialItem" key={idx}>
            {
              item.iconUrl ? <img src={item.iconUrl} alt={item.alt} className="Footer__socialItem__Img"/> 
              : item.svg()
            }
          </a>
        ))
      }
    </div>
  </div>
  <div className="CodeWithLove">
    <code>
      <span className="codeChar">{`<>`} </span>
      with <HeartLogo /> by <a href="https://github.com/fozg">fozg</a>;
        bootstrap with <a href="https://nextjs.org/" target="_blank">Nextjs</a>
    </code>
  </div>
  </>
)

const Socials = [
  {
    iconUrl: '/static/images/GitHub-Mark-Light-32px.png',
    link: 'https://github.com/fozg',
    alt: 'Github'
  },
  {
    svg: LinkedInLogo,
    link: 'https://www.linkedin.com/in/phongdh/',
    alt: 'LinkedIn'
  },
  {
    svg: LogoEmail,
    link: 'mailto://phongdaohong@gmail.com',
    alt: 'Gmail'
  }
]