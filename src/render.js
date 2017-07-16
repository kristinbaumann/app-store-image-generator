import React from 'react';
import { render, Artboard, Text, View, StyleSheet, Image } from 'react-sketchapp';

const imageURL = 'http://localhost:5000';

const layout = {
    width: 1242,
    height: 2208,
    cols: 5,
    margin: 100
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
    const path = `${imageURL}/da-DA/iPhone6Plus-${item.screenshot}-d41d8cd98f00b204e9800998ecf8427e.png`;
    return (
        <Artboard name={`child ${index+1}`} style={getArtboardStyle(index)}>
            <Text style={styles.title}>{item.text}</Text>
            <View style={styles.container}>
                <Image source={imageURL+'/phone2.png'} style={styles.phone} />
                <Image source={path} style={styles.screenshot} />
            </View>
        </Artboard>
    );
}

export default (context) => {
    const data = [
        { text: 'The world`s largest vacation rental search engine', screenshot: '0FD' },
        { text: 'Compare over 10 million offers - for free', screenshot: '1List1' },
        { text: 'The world`s largest vacation rental search engine asdansd', screenshot: '2Filters' },
        { text: 'lorem ipsum3', screenshot: '3Maps' },
        { text: 'lorem ipsum4', screenshot: '4Details1' },
    ]
    const container  = <Artboard name="parent" style={getParentStyle(data.length)}> 
        {data.map((item, index) => <StoreImage key={index} item={item} index={index}/>)}
    </Artboard>
    render(container, context.document.currentPage())
}   