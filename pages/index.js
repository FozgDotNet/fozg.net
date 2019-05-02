import Page from '../components/page';
// import TopMenu from '../components/topMenu';
import Intro from '../components/intro'
import AppList from '../components/appList';
import FunProjects from '../components/funProjects';
import Blogs from '../components/blogs';

export default () => (
  <Page title="Fozg.net">
    {/* <TopMenu /> */}
    <Intro />
    
    <AppList />
    
    <Blogs />

    <FunProjects />
  </Page>
)