import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

class SelectedBeast extends React.Component {

  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.beastClicked.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card.Img variant="top"
            src={this.props.beastClicked.image_url}
            alt={this.props.beastClicked.title}
            className='img'
          />
          <Card.Text >
            {this.props.beastClicked.description}
          </Card.Text>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default SelectedBeast;