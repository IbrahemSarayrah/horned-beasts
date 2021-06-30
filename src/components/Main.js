import React from 'react'
import HornedBeast from './HornedBeast';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Row'



class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            horns: 0
        }
    }

    submitChange = (event) => {
        this.setState({
            horns: Number(event.target.value)
        })
    }


    render() {

        return (

            <>

                <Form style={
                    {
                        width: '50%', textAlign: 'center',
                        fontSize: '25px', marginLeft: 'auto', marginRight: 'auto'
                    }}
                    onChange={this.submitChange}>
                    <Form.Group>
                        <Form.Label> View The Beasts By The Number of Horns</Form.Label>
                        <Form.Control as='select' change='change'>
                            <option value="0">All</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="100">100</option>
                        </Form.Control>
                    </Form.Group>
                </Form>

                <Row md={1} >
                    <Col>
                        {this.props.beastData.map((data, index) => {
                            if (this.state.horns === data.horns){
                                return <HornedBeast image_url={data.image_url} title={data.title} description={data.description}
                                key={index} horns={data.horns} showSelectedBeast={this.props.handleModal} />
                            }else if (this.state.horns === 0) {
                                return <HornedBeast image_url={data.image_url} title={data.title} description={data.description}
                                key={index} horns={data.horns} showSelectedBeast={this.props.handleModal} />
                            }

                        })
                        }
                    </Col>
                </Row>
            </>
        )
    }
}

export default Main;