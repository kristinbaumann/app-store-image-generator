import React, {Component} from 'react';
import { Artboard, Text, View, Image } from 'react-sketchapp';
import config from '../config';

class StoreImage extends Component {
    calculateLayout(i){
        const { itemWidth, itemHeight, cols, margin } = config.layout;
        const x = i % cols;
        const y = (i - x) / cols;
        return {
            top: y * (itemHeight + margin) + margin,
            left: x * (itemWidth + margin) + margin,
            width: itemWidth,
            height: itemHeight
        }
    }
    render(){
        const {item, index} = this.props;
        const screenshotPath = `${config.imageUrl}/screenshots/${item.locale}/${item.screenshotImg}`;
        const storeImageStyle = Object.assign({}, this.calculateLayout(index), config.styles.storeImage);
        return (
            <Artboard name={`${item.locale}_${item.number}`} style={storeImageStyle}>
                <Text style={config.styles.title}>{item.screenshotText}</Text>
                <View style={config.styles.imageContainer}>
                    <Image source={`${config.imageUrl}/images/${config.phoneFrame}`} style={config.styles.phone} />
                    <Image source={screenshotPath} style={config.styles.screenshot} />
                </View>
            </Artboard>
        );
    }
}

export default StoreImage;