import React from 'react';
import { render, Artboard, Text, View, StyleSheet, Image } from 'react-sketchapp';


const layout = {
    width: 1242,
    height: 2208,
    cols: 5,
    margin: 150
}

const styles ={
    title: {
        fontSize: 72,
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        color: '#ffffff',
        paddingTop: 20
    },
    container: {
        position: 'relative'
    },
    phone: {
        width: 1058,
        height: 1815
    },
    screenshot: {
        top: 215,
        left: 45,
        height: 1605,
        width: 946,
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
        backgroundColor: '#4a90e2', // set artboard background color here
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
}

const getParentStyle = count => {
    const { width, height, cols, margin } = layout;
    const rows = (count - (count % cols)) / cols + 1;
    // console.log(`${rows} rows, ${cols} cols`) 
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
    const path = `${meta.url}/${item.locale}/${meta.device}-${item.screenshot}-${meta.hash}.png`;
    return (
        <Artboard name={`iOS_${meta.version}_${item.locale}_${item.screenshot}`} style={getArtboardStyle(index)}>
            <Text style={styles.title}>{item.text}</Text>
            <View style={styles.container}>
                <Image source={meta.url+'/phone2.png'} style={styles.phone} />
                <Image source={path} style={styles.screenshot} />
            </View>
        </Artboard>
    );
}

//const locales = ['da-DA', 'de-AT', 'de-CH', 'de-DE', 'en-AU', 'en-GB', 'en-US', 'es-ES', 'es-MX', 'fr-FR', 'it-IT', 'nb-NO', 'nl-NL', 'pl-PL', 'ru-RU', 'sv-SV'];
const locales = ['da-DA', 'de-DE', 'en-US', 'es-ES', 'fr-FR', 'it-IT'];
const selectedScreenshots = [ '0FD', '1List1', '2Filters', '3Maps', '4Details1'];
const meta = {
    url: 'http://localhost:5000',
    device: 'iPhone6Plus',
    hash: 'd41d8cd98f00b204e9800998ecf8427e',
    version: '1.7.1'
}

mergeData = () => {
    const data = [];
    for (var j = 0; j < locales.length; j++) {
        for (let i = 0; i < selectedScreenshots.length; i++) {
            data.push({ 
                locale: locales[j], 
                screenshot: selectedScreenshots[i], 
                text: 'text' 
            });
        }    
    }
    return data;
}

export default (context) => {
    const data = mergeData();
    const container  = <Artboard name="container" style={getParentStyle(data.length)}> 
        {data.map((item, index) => <StoreImage key={index} item={item} index={index}/>)}
    </Artboard>
    render(container, context.document.currentPage())
}   