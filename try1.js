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
    console.log(`${rows} rows, ${cols} cols`) 
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
    const path = `${imageURL}/da-DA/iPhone6Plus-${item.screenshot}-d41d8cd98f00b204e9800998ecf8427e.png`;
    console.log(path)
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
const StoreLocale = ({ locale }) => {
    console.log(locale);
    const a = locales.text.map((t, i) => <StoreImage2 key={i} id={locale.id} text={t} />)
    // return <StoreImage key={index} item={item} index={index}/>
}

const StoreLocaleImage = ({ locale, nrLocale}) => {


    //const path = `${imageURL}/da-DA/iPhone6Plus-${item.screenshot}-d41d8cd98f00b204e9800998ecf8427e.png`;
    //console.log(path)
    const a = locale.text.map((item, i) => {
        console.log(item);
        //i = (i == 0) ? 1 : i; 
        return (
            <Artboard name={`child ${locale.id} ${i}`} style={getArtboardStyle(nrLocale * i)}>
               <Text style={styles.title}>{locale.id} {i}</Text>
            </Artboard>
        );
    })
    return <View name={`${locale.id}`}>
       {a} 
    </View>;
    
}



const data = {
        general: {
            amount: 5,
            screenshots : ['0FD', '1List1', '2Filters', '3Maps', '4Details1'],
            locales: ['da-DA', 'de-AT']
        },
        locales: [
            {
                text: []
            },
            {   id: 'da-DA',
                text: [
                    'The world`s largest vacation rental search engine',
                    'Compare over 10 million offers - for free',
                    'The world`s largest vacation rental search engine',
                    'The world`s largest vacation rental search engine asdansd',
                    'lorem ipsum'
                ]
            },
            {   
                id: 'de-AT',
                text: [
                    'German 1',
                    'German 2',
                    'Germna 3',
                    'sdfsdfs f dsf',
                    'lorem ipsum'
                ]
            }
        ]  
    } 

export default (context) => {
    console.log(data.general.screenshots.length * data.general.locales.length);
    const container  = <Artboard name="parent" style={getParentStyle(data.general.screenshots.length * data.general.locales.length)}> 
        {data.locales.map((locale, index) => <StoreLocaleImage key={index} locale={locale} nrLocale={index} />)}
    </Artboard>
    render(container, context.document.currentPage())
}   