import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//components
import CenterContent from './components/center-content/CenterContent.js';
import Navigation from './components/nav/Navigation.js';
import Footer from './components/footer/Footer.js';
import LeftSidebar from './components/left-sidebar/LeftSidebar.js';
import RightSidebar from './components/right-sidebar/RightSidebar.js';

function App() {
  return (
    <Container fluid>
      {/*Navigation*/}
      <Row>
        <Navigation />
      </Row>
      {/*Main Body*/}
      <Row>

        {/*Left Sidebar*/}
        <Col md="2">
          <LeftSidebar />
        </Col>

        {/*Middle Content*/}
        <Col md="8">
          <CenterContent />
        </Col>

        {/*Right Sidebar*/}
        <Col md="2">
          <RightSidebar />
        </Col>
      </Row>

      {/*Footer*/}
      <Row>
        <Footer />
      </Row>
    </Container>
  );
}

export default App;
