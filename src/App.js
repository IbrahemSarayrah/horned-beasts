import React from 'react'
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Row'
import beastData from './components/data.json'
import SelectedBeast from './components/SelectedBeast';


class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      beastData: beastData,
      show: false,
    }
  }

handleModal =()=>{
  this.setState({
    show : !this.state.show,
  })
}
  render() {
    return (
      <>
        <Header />
        <Row md={1} >
          <Col>
            <Main beastData ={this.state.beastData} handleModal={this.handleModal} />
            <SelectedBeast  handleClose={this.handleModal} show={this.state.show}/>
          </Col>
        </Row>
        <Footer />
      </>
    )
  }
}

export default App;