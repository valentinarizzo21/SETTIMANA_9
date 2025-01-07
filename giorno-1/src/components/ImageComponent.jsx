/* eslint-disable react/prop-types */
import {Component} from "react";

class ImageSun extends Component{
    render(){
        return (
            <>
                <img src={this.props.src} alt={this.props.alt} />
            </>
        )
    }
}

export default ImageSun;