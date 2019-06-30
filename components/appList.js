import AppItem from "./appItem";
import Hr from "./hr";

export default () => (
  <div className="container mt-3">
    <div>
      <Hr>Apps/Projects</Hr>
    </div>
    <div className="row">
      {appsList.map((app, idx) => (
        <AppItem {...app} key={idx} />
      ))}
    </div>
  </div>
);

export const appsList = [
  {
    title: "TomatoWorks",
    description: "A time management inspired by Tomato timer",
    iconUrl: "/static/images/TomatoWorks@2x.png",
    url: "https://fozg.net/tomato",
    backgroundColor: "#dc5758",
    isPreview: true
  },
  {
    title: "Accounts",
    description: "Your accounts on Fozg.net",
    iconUrl: "static/images/account64.png",
    url: "https://accounts.fozg.net",
    backgroundColor: "#272727",
    isBeta: true
  },
  {
    title: "Todomorrow",
    description: "Focus on your today todo, the rest let tomorrow.",
    iconUrl: "static/images/Todomorrow.png",
    url: "https://todomorrow.fozg.net",
    backgroundColor: "#e2c860",
    isPreview: true
  },
  {
    title: "Messnote",
    description: "Note everything fast!",
    iconUrl: "static/images/fastnote.png",
    url: "https://messnote.fozg.net",
    backgroundColor: "#e2c860",
    isPreview: true
  },
  {
    title: "Pixel",
    description: "Create pixel image that fast",
    iconUrl: "static/images/heartpixel.png",
    url: "https://pixel.fozg.net/",
    backgroundColor: "#e2c860",
    isPreview: true
  },
  {
    title: "Blog",
    description: "Fozg's Blogs",
    isPreview: true,
    iconUrl: "static/images/f-read-box-2.png",
    url: "https://fozg.net/blog",
    backgroundColor: "#e2c860"
  },
  {
    title: "Profile",
    description: "Your Profile on Fozg.net",
    isDevelopment: true,
    iconUrl: "static/images/profile64.png",
    url: "#",
    backgroundColor: "rgb(93, 160, 161)"
  },
  {
    title: "Dashboard",
    description: "See people you flowing",
    isDevelopment: true,
    iconUrl: "static/images/dashboard2x64.png",
    url: "#",
    backgroundColor: "rgb(95, 95, 95)"
  },
  {
    title: "Write",
    description: "Write everything",
    isDevelopment: true,
    iconUrl: "static/images/write.png",
    url: "#",
    backgroundColor: "rgb(153, 142, 238)"
  }
];
