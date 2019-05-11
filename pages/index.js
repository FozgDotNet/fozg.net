import Page from '../components/page';
// import TopMenu from '../components/topMenu';
import Intro from '../components/intro'
import AppList from '../components/appList';
import FunProjects from '../components/funProjects';
import Blogs from '../components/blogs';
import Npm from '../components/npm';

export default () => (
  <Page title="Fozg.net">
    {/* <TopMenu /> */}
    <Intro />
    
    <AppList />
    
    <Blogs />

    <Npm />
    
    <FunProjects />
  </Page>
)