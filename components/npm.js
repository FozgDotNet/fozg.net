import Hr from "./hr";

const Item = ({ name, description, links, version }) => (
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
        opacity: 0.5;
      }
      .description {
        color: #999;
      }
    `}</style>
    <div className="d-flex justify-content-between">
      <a className="title" href={links.npm} target="_blank">
        {name}
      </a>
      <div className="version">{version}</div>
    </div>
    <div>
      <a href={links.homepage} target="_blank">
        {links.repository}
      </a>
    </div>
    <div className="description">{description}</div>
  </div>
);

export default class NPMPackages extends React.Component {
  state = {
    appList: []
  };

  componentDidMount() {
    fetch("https://api.npms.io/v2/search?q=author:fozg", {
      credentials: "omit",
      mode: "cors"
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ appsList: data.results.filter(item => [
          "react-light-state", 
          "fozg-ui",
          "react-weekdays-picker",
          "roumuter",
          "react-dashout"
        ].includes(item.package.name) )});
      });
  }
  render() {
    const { appsList = [] } = this.state;

    return (
      <div className="container mt-3">
        <div>
          <Hr>NPM</Hr>
        </div>
        <div className="row d-flex justify-content-center">
          {appsList.map((app, idx) => (
            <Item {...app.package} key={idx} />
          ))}
        </div>
      </div>
    );
  }
}
