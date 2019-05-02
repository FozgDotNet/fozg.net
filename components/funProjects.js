import Item from './funProjectItem';
import Hr from './hr';

export default () => (
  <div className="container mt-3">
    <div>
      <Hr>Fun projects</Hr>
    </div>
    <div className="row justify-content-center">
      {
        appsList.map((app, idx) => <Item {...app} key={idx} />)
      }
      
    </div>
  </div>
)

export const appsList = [
  {
    title: "SungFam",
    description: "A tool to apply water mark for my wife's shop",
    iconUrl: "/static/images/SungFamVang.png",
    url: "https://sung.fozg.net",
    backgroundColor: 'rgb(255, 179, 71)',
  },
]