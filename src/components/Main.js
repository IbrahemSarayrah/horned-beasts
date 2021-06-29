import React from 'react'
import HornedBeast from './HornedBeast';


class Main extends React.Component {

    render() {

        return (

            <>
                {this.props.beastData.map((data, index) => {
                    return <HornedBeast
                        image_url={data.image_url}
                        title={data.title}
                        description={data.description}
                        key={index}
                        showSelectedBeast={this.props.handleModal}
                    />
                })}
            </>
        )
    }
}

export default Main;