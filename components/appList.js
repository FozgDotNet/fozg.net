import AppItem from './appItem';

export default () => (
  <div className="container mt-3">
    <div className="row">
      {
        appsList.map((app, idx) => <AppItem {...app} key={idx} />)
      }
    </div>
  </div>
)

const appsList = [
  {
    title: "TomatoWorks",
    description: "A time management inspired by Tomato timer",
    iconUrl: "/static/images/TomatoWorks@2x.png",
    url: "https://fozg.net/tomato",
  },
  {
    title: "Accounts",
    description: "Your accounts on Fozg.net",
    iconUrl: "static/images/account64.png",
    url: "https://accounts.fozg.net",
  },
  {
    title: "Profile",
    description: "Your Profile on Fozg.net",
    isDevelopment: true,
    iconUrl: "static/images/profile64.png",
    url: "#",
  },
  {
    title: "Dashboard",
    description: "See people you flowing",
    isDevelopment: true,
    iconUrl: "static/images/dashboard2x64.png",
    url: "#",
  },
  {
    title: "Write",
    description: "Write everything",
    isDevelopment: true,
    iconUrl: "static/images/write.png",
    url: "#",
  },
  {
    title: "Read",
    description: "Read blogs, stories, note..",
    isDevelopment: true,
    iconUrl: "static/images/good read@2x.png",
    url: "#",
  },
  
]