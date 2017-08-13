import React, { Component } from 'react';
import { Artboard } from 'react-sketchapp';
import StoreImage from './StoreImage';
import translations from '../../../rawData/translations/translations.json';
import config from '../config';

class Container extends Component {
    calculateLayout(count){
        const { itemWidth, itemHeight, cols, margin } = config.layout;
        const rows = (count - (count % cols)) / cols;
        return {
            top: 0,
            left: 0,
            width: cols * (itemWidth + margin) + margin,
            height: rows * (itemHeight + margin) + margin,
            backgroundColor: '#eee'
        }
    }

    prepareData(){
        const locales = ["english_american","german","english_uk","english_australia","frensh","italian","dutch","spanish_spain","spanish_mexican","norwegian","russian","swedish","danish"];
        const envs = ['ios', 'and'];

        const data = [];
        for (var i = 0; i < envs.length; i++) {
            let env = envs[i];
            // loop through locales
            for (let l = 0; l < locales.length; l++) {
                const localeText = locales[l];
                const localeKey = translations.filter(t => t.key === env+'_key')[0][localeText];
                const imageKey = translations.filter(t => t.key === env+'_image_key')[0][localeText];

                // loop through screenshots
                for (var number = 1; number < 6; number++) {
                    const screenshotText = translations.filter(t => t.key === env+'_screenshot_'+number+'_text')[0][localeText];
                    const screenshotImg = translations.filter(t => t.key === env+'_screenshot_'+number+'_img')[0][localeText];
                    
                    let element = {
                        localeText,
                        localeKey,
                        imageKey,
                        screenshotText,
                        screenshotImg,
                        number,
                        env
                    }
                    data.push(element);
                }
            }
        }
        return data;
    }

    render(){
        const data = this.prepareData();
        return (
            <Artboard name="container" style={this.calculateLayout(data.length)}>
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