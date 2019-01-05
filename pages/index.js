import Page from '../components/page';
import TopMenu from '../components/topMenu';
import Intro from '../components/intro'
import AppList from '../components/appList';
import Footer from '../components/footer';

export default () => (
  <Page title="Fozg.net">
    <TopMenu />
    <Intro />
    
    <div className="col-md-8 col-sm-10 mx-auto">
      <AppList />
    </div>
    <Footer />
  </Page>
)