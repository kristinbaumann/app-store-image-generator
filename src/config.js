const config = {
    layout: {
        itemWidth: 414,
        itemHeight: 736,
        cols: 5,
        margin: 100
    },
    imageUrl: 'http://localhost:5000',
    phoneFrameUrl: 'http://localhost:5000/frame_iphone7_abstract.png',
    
    styles: {
        container:{
            backgroundColor: '#eee'
        },
        storeImage: {
            position: 'fixed',
            backgroundColor: '#4a90e2', // artboard background color
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center'
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
        imageContainer: {
            position: 'relative'
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
    },

    //translations: require('../../rawData/translations/translations.json'),
    translations: require('../data/translations/translations_v1.json'),
    locales: ["English_American","German","English_UK","English_Australia","Frensh","Italian","Dutch","Spanish_Spain","Spanish_Mexican","Norwegian","Russian","Swedish","Danish"],
    envs: ['ios', 'and'],
}

export default config;