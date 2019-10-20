import Page from "../components/page";
// import TopMenu from '../components/topMenu';
import Intro from "../components/intro";
import AppList from "../components/appList";
import FunProjects from "../components/funProjects";
import Blogs from "../components/blogs";
import Npm from "../components/npm";
import BgAppIcons from "../components/backgroundAppsIcon";

export default () => (
  <Page title="Fozg.net">
    {/* <TopMenu /> */}
    <BgAppIcons />
    <Intro />
    <AppList />
    <Blogs />
    <Npm />
    <FunProjects />
  </Page>
);
