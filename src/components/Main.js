import React from 'react'
import HornedBeast from './HornedBeast';
import beastData from './data.json'

class Main extends React.Component {
    render() {

        return (

            <>
                {beastData.map((data, index) => {
                    return <HornedBeast
                        image_url={data.image_url}
                        title={data.title}
                        description={data.description}
                        key={index}
                    />
                })}
            </>
        )
    }
}

export default Main;