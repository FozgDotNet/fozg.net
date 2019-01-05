import './styles.scss';
import LinkedInLogo from './logoLinkedIn';
import EmailLogo from './logoEmail';
import logoEmail from './logoEmail';

export default () => (
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
    <div className="Cpr">
      @{new Date().getFullYear()} <strong><a href="https://fozg.net">fozg.net</a></strong>
    </div>
  </div>
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
    svg: logoEmail,
    link: 'mailto://phongdaohong@gmail.com',
    alt: 'Gmail'
  }
]