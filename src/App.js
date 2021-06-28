import React from 'react'
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Row'


class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Row md={1} >
          <Col>
            <Main />
          </Col>
        </Row>
        <Footer />
      </>
    )
  }
}

export default App;