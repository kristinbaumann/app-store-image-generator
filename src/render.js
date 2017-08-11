import React from 'react';
import { render, Artboard, Text, View, StyleSheet, Image } from 'react-sketchapp';
import translations from '../../rawData/translations/translations.json';

const meta = {
    url: 'http://localhost:5000',
    frame: 'frame@1x.png'
}

const locales = ["english_american","german","english_uk","english_australia","frensh","italian","dutch","spanish_spain","spanish_mexican","norwegian","russian","swedish","danish"];
const envs = ['ios', 'and'];

const layout = {
    width: 414,
    height: 736,
    cols: 5,
    margin: 100
}

const styles ={
    container: {
        position: 'relative'
    },
    title: {
        width: 414,
        fontSize: 22,
        lineHeight: 32,
        fontFamily: 'SF Pro Display',
        fontWeight: 'bold',
        color: '#ffffff',
        paddingTop: 35,
        paddingBottom: 35,
        paddingLeft: 25,
        paddingRight: 25,
        textAlign: 'center'
    },
    phone: {
        width: 365,
        height: 743
    },
    screenshot: {
        borderWidth: 1,
        borderColor: '#000000',
        top: 90,
        left: 24,
        height: 558,
        width: 316,
        position: 'absolute'
    }
};

const getArtboardStyle = i => {
    const { width, height, cols, margin } = layout;
    const x = i % cols;
    const y = (i - x) / cols;
    // Top and left are switched for some reason.
    const top = x * (width + margin) + margin; 
    const left = y * (height + margin) + margin;
    return {
        left,
        top,
        width,
        height,
        position: 'fixed',
        backgroundColor: '#4a90e2', // artboard background color
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
}

const getParentStyle = count => {
    const { width, height, cols, margin } = layout;
    const rows = (count - (count % cols)) / cols;
    const totalHeight = rows * (height + margin) + margin;
    const totalWidth = cols * (width + margin) + margin;
    return {
        top: 0,
        left: 0,
        width: totalWidth,
        height: totalHeight,
        backgroundColor: '#eee'
    }
}

const StoreImage = ({item, index}) => {
    const path = `${meta.url}/images_${item.env}/${item.imageKey}/${item.screenshotImg}.png`;
    return (
        <Artboard name={`${item.env}_${item.localeKey}_${item.number}`} style={getArtboardStyle(index)}>
            <Text style={styles.title}>{item.screenshotText}</Text>
            <View style={styles.container}>
                <Image source={meta.url+'/'+meta.frame} style={styles.phone} />
                <Image source={path} style={styles.screenshot} />
            </View>
        </Artboard>
    );
}

prepareData = () =>{
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

export default (context) => {
    const data = prepareData();
    console.log(data);

    const container  = <Artboard name="container" style={getParentStyle(data.length)}> 
        {data.map((item, index) => <StoreImage key={index} item={item} index={index}/>)}
    </Artboard>
    render(container, context.document.currentPage())
}   