import AppItem from './appItem';
import Hr from './hr';

export default () => (
  <div className="container mt-3" style={{maxWidth: 900}}>
    <div>
      <Hr>Apps/Projects</Hr>
    </div>
    <div className="row">
      {
        appsList.map((app, idx) => <AppItem {...app} key={idx} />)
      }
    </div>
  </div>
)

export const appsList = [
  {
    title: "🍅 TomatoWorks",
    description: "A time management inspired by Tomato timer",
    iconUrl: "/static/images/TomatoWorks@2x.png",
    url: "https://fozg.net/tomato",
    backgroundColor: '#dc5758',
    isBeta: true
  },
  {
    title: "🔐 Accounts",
    description: "Your accounts on Fozg.net",
    iconUrl: "static/images/account64.png",
    url: "https://accounts.fozg.net",
    backgroundColor: "#272727",
  },
  {
    title: "💖 Pixel",
    description: "Create pixel image that fast",
    iconUrl: "static/images/heartpixel.png",
    url: "https://pixel.fozg.net/",
    backgroundColor: "#e2c860",
    isBeta: true
  },
  {
    title: "🧐 Profile",
    description: "Your Profile on Fozg.net", 
    isDevelopment: true,
    iconUrl: "static/images/profile64.png",
    url: "#",
    backgroundColor: "rgb(93, 160, 161)",
  },
  { 
    title: "📜 Dashboard",
    description: "See people you flowing",
    isDevelopment: true,
    iconUrl: "static/images/dashboard2x64.png",
    url: "#",
    backgroundColor: "rgb(95, 95, 95)",
  },
  {
    title: "📝 Write",
    description: "Write everything",
    isDevelopment: true,
    iconUrl: "static/images/write.png",
    url: "#",
    backgroundColor: "rgb(153, 142, 238)",
  },
  {
    title: "📖 Read",
    description: "Read blogs, stories, note..",
    isDevelopment: true,
    iconUrl: "static/images/f-read-box-2.png",
    url: "#",
    backgroundColor: "#e2c860",
  },
  {
    title: "⚡ Fast Note",
    description: "Note everything fast!",
    isDevelopment: true,
    iconUrl: "static/images/fastnote.png",
    url: "#",
    backgroundColor: "#e2c860",
  },
 
  
]