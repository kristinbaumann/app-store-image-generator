import React, {Component} from 'react';
import { Artboard, Text, View, Image } from 'react-sketchapp';
import config, {styles} from '../config';

class StoreImage extends Component {
    calculateLayout(i){
        const { itemWidth, itemHeight, cols, margin } = config.layout;
        const x = i % cols;
        const y = (i - x) / cols;
        return {
            left: y * (itemHeight + margin) + margin,
            top: x * (itemWidth + margin) + margin,
            width: itemWidth,
            height: itemHeight
        }
    }
    render(){
        const {item, index} = this.props;
        const path = `${config.imageUrl}/images_${item.env}/${item.imageKey}/${item.screenshotImg}.png`;
        const storeImageStyle = Object.assign({}, this.calculateLayout(index), styles.storeImage);
        return (
            <Artboard name={`${item.env}_${item.localeKey}_${item.number}`} style={storeImageStyle}>
                <Text style={styles.title}>{item.screenshotText}</Text>
                <View style={styles.imageContainer}>
                    <Image source={config.imageUrl+'/'+config.phoneFrame} style={styles.phone} />
                    <Image source={path} style={styles.screenshot} />
                </View>
            </Artboard>
        );
    }
}

export default StoreImage;