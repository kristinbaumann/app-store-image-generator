import React from 'react';
import { render, Artboard, Text, View, StyleSheet } from 'react-sketchapp';

const layout = {
    width: 375,
    height: 667,
    cols: 3,
    margin: 100
}

const getArtboardStyle = i => {
    let { width, height, cols, margin } = layout;
    let x = i % cols;
    let y = (i - x) / cols;
    // Top and left are switched for some reason.
    let top = x * (width + margin) + margin; 
    let left = y * (height + margin) + margin;
    let style = {
        left,
        top,
        width,
        height,
        position: 'fixed',
        backgroundColor: '#fff'
    }
    console.log(style)
    return style
}

const getParentStyle = count => {
    let { width, height, cols, margin } = layout;
    let rows = (count - (count % cols)) / cols + 1;
    console.log(`${rows} rows, ${cols} cols`) 
    let totalHeight = rows * (height + margin) + margin;
    let totalWidth = cols * (width + margin) + margin;
    let style = {
        top: 0,
        left: 0,
        width: totalWidth,
        height: totalHeight,
        backgroundColor: '#eee'
    }
    return style
}

export default (context) => {
    let content = [
        <View style={{width: 100, height: 100, backgroundColor: 'green'}}>foo</View>,
        <View style={{width: 100, height: 100, backgroundColor: 'green'}}>bar</View>,
        <View style={{width: 100, height: 100, backgroundColor: 'green'}}>foo</View>,
        <View style={{width: 100, height: 100, backgroundColor: 'green'}}>bar</View>,
        <View style={{width: 100, height: 100, backgroundColor: 'green'}}>foo</View>,
        <View style={{width: 100, height: 100, backgroundColor: 'green'}}>bar</View>
    ]

    let x = <Artboard name="parent" style={getParentStyle(content.length)}> 
        {content.map((item, i) => <Artboard  style={getArtboardStyle(i)} children={item} />)}
    </Artboard>
    render(x, context.document.currentPage())
}   