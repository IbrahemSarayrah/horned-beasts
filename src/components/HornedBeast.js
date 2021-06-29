import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import SelectedBeast from './SelectedBeast'
class HornedBeast extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            numberOfLike: 0
        }
    }
    increaseLike = () => {
        this.setState({
            numberOfLike: this.state.numberOfLike + 1
        })
    }
    handleModal = () => {
        this.props.showSelectedBeast();
    }

    render() {
        return (
            <Card style={{ width: '18rem', margin: '20px', textAlign: 'center' }}>
                <Card.Img variant="top"
                    src={this.props.image_url}
                    alt={this.props.title}
                    className='img'
                />
                <Card.Body style={{ color: 'white', backgroundColor: '#053742' }}>
                    <Card.Title >{this.props.title}</Card.Title>
                    <Card.Text >
                        {this.props.description}
                    </Card.Text>
                    <Button onClick={this.increaseLike} variant="primary">Like  ❤️ {this.state.numberOfLike}</Button>
                    <Button style={{ margin: '20px' }} onClick={this.handleModal}>More Details</Button>
                </Card.Body>
                <SelectedBeast />
            </Card>
        )
    }
}

export default HornedBeast;