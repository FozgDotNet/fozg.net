import AppItem from './appItem';

export default () => (
  <div className="container mt-3">
    <div className="row">
      {
        appsList.map((app, idx) => <AppItem title="TomatoWork" key={idx} />)
      }
    </div>
  </div>
)

const appsList = [
  {
    title: "",
    description: "",
    iconUrl: "",
    url: "",
  },
  {
    title: "",
    description: "",
    iconUrl: "",
    url: "",
  },
  {
    title: "",
    description: "",
    iconUrl: "",
    url: "",
  },
  {
    title: "",
    description: "",
    iconUrl: "",
    url: "",
  },
  {
    title: "",
    description: "",
    iconUrl: "",
    url: "",
  },
  {
    title: "",
    description: "",
    iconUrl: "",
    url: "",
  },
  {
    title: "",
    description: "",
    iconUrl: "",
    url: "",
  },
]