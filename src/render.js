import React from 'react';
import { render, Artboard, Text, View, StyleSheet } from 'react-sketchapp';

const layout = {
    width: 375,
    height: 667,
    cols: 3,
    margin: 100
}

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
        backgroundColor: '#fff' // set artboard background color here
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
    console.log(item);
    return (
        <Artboard name={`child ${index+1}`} style={getArtboardStyle(index)}>
            <Text
                name='Sketch Layer name'
                style={{
                    fontSize: 24,
                    fontFamily: 'Helvetica',
                    fontWeight: 'bold',
                    color: '#01ffae',
                }}
                >
                {item.text}
            </Text>
            <View style={{width: 100, height: 100, backgroundColor: 'green'}}>{item.text}</View>
        </Artboard>
    );
}

export default (context) => {
    const data = [
        { text: 'lorem ipsum1', screenshot: 'source1' },
        { text: 'lorem ipsum2', screenshot: 'source2' },
        { text: 'lorem ipsum3', screenshot: 'source3' },
        { text: 'lorem ipsum4', screenshot: 'source4' }
    ]
    const container  = <Artboard name="parent" style={getParentStyle(data.length)}> 
        {data.map((item, index) => <StoreImage item={item} index={index}/>)}
    </Artboard>
    render(container, context.document.currentPage())
}   