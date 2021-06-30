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
      beastClicked: {}
    }
  }

handleModal =(title)=>{
  let beastClicked = beastData.find(data => {
    if (data.title === title) {
      return data;
    }
  })
  this.setState({
    show : true,
    beastClicked: beastClicked
  })
}

handleClose = ()=>{
  this.setState({
    show : false
  })
}
  render() {
    return (
      <>
        <Header />
        <Row md={1} >
          <Col>
            <Main beastData ={this.state.beastData} handleModal={this.handleModal} />
            <SelectedBeast beastClicked={this.state.beastClicked} handleClose={this.handleClose} show={this.state.show}/>
          </Col>
        </Row>
        <Footer />
      </>
    )
  }
}

export default App;