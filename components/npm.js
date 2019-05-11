import Hr from "./hr";

const Item = ({ title, description, linkNpm, linkGithub, github, version }) => (
  <div className="wrap col-xs-12 col-sm-10 col-md-5 m-1">
    <style jsx>{`
      .wrap {
        background-color: #26282c;
        border: 1px solid #0e0e0e;
        border-radius: 10px;
        padding: 10px;
      }
      .title {
        color: #fff;
      }
      .version {
        color: #fff;
        opacity: .5;
      }
      .description {
        color: #999;
      }
    `}</style>
    <div className="d-flex justify-content-between">
      <a className="title" href={linkNpm} target="_blank">{title}</a>
      <div className="version">{version}</div>
    </div>
    <div>
      <a href={linkGithub} target="_blank">{github}</a>
    </div>
    <div className="description">
      {description}
    </div>
  </div>
);

export default () => (
  <div className="container mt-3">
    <div>
      <Hr>NPM</Hr>
    </div>
    <div className="row d-flex justify-content-center">
      {appsList.map((app, idx) => (
        <Item {...app} key={idx} />
      ))}
    </div>
  </div>
);

export const appsList = [
  {
    title: "react-light-state",
    version: "0.0.4",
    github: "fozg/react-light-state",
    linkNpm: "https://npmjs.com/package/react-light-state",
    linkGithub: "https://github.com/fozg/react-light-state",
    description: "Light and simple React state management.",
  },
  {
    title: "fozg-ui",
    version: "1.0.2 (0.0.2)",
    github: "fozg/fozg-ui",
    linkNpm: "https://npmjs.com/package/fozg-ui",
    linkGithub: "https://github.com/fozg/fozg-ui",
    description: "Personal UI kit.",
  },
];
