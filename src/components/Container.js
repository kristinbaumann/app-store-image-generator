import React, { Component } from 'react';
import { Artboard } from 'react-sketchapp';
import StoreImage from './StoreImage';
import config from '../config';

class Container extends Component {
    calculateLayout(count){
        const { itemWidth, itemHeight, cols, margin } = config.layout;
        const rows = (count - (count % cols)) / cols;
        return {
            top: 0,
            left: 0,
            width: cols * (itemWidth + margin) + margin,
            height: rows * (itemHeight + margin) + margin
        }
    }

    render(){
        const { data } = this.props;
        const containerStyle = Object.assign({}, this.calculateLayout(data.length), config.styles.container);
        return (
            <Artboard name="container" style={containerStyle}>
                {data.map((item, index) => 
                    <StoreImage 
                        key={index} 
                        item={item} 
                        index={index} 
                    />)}
            </Artboard>
        );
    }
}

export default Container; 