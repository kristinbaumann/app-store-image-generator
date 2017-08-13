const itemWidth = 414;

const phoneCutHalf = {
    phoneMargin: 25, 
    phoneTopWidth: 90,
    phoneSideWidth: 25
}
const phoneCutBottom = {
    phoneMargin: 40, 
    phoneTopWidth: 83,
    phoneSideWidth: 23
}
const phoneComplete = {
    phoneMargin: 55, 
    phoneTopWidth: 75, 
    phoneSideWidth: 21, 
};
const phoneSmall = {
    phoneMargin: 75, 
    phoneTopWidth: 65,
    phoneSideWidth: 17
}

const dimensions = phoneCutBottom;

const config = {
    layout: {
        itemWidth: itemWidth,
        itemHeight: 736,
        cols: 5,
        margin: 100
    },
    translations: require('../data/translations/translations.json'),
    locales: ["en-US","de-DE","fr-FR","it-IT","nl-NL","es-ES","ru-RU"],
    imageUrl: 'http://localhost:5000',
    phoneFrame: 'frame_iphone7_abstract.png',
    styles: {
        container:{
            backgroundColor: '#eee'
        },
        storeImage: {
            position: 'fixed',
            backgroundColor: '#000000', // artboard background color
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center'
        },
        title: {
            width: itemWidth,
            fontSize: 36,
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
            position: 'relative',
           // alignSelf: ''
        },
        phone: {
            width: itemWidth-(dimensions.phoneMargin * 2), // 365px
            height: (itemWidth-(dimensions.phoneMargin * 2) )* 2.04 // 743
        },
        screenshot: {
            borderWidth: 1,
            borderColor: '#000000',
            top: dimensions.phoneTopWidth,
            left: dimensions.phoneSideWidth-1,
            width: itemWidth-(dimensions.phoneMargin*2 + dimensions.phoneSideWidth*2)+1, // 315px
            height: (itemWidth-(dimensions.phoneMargin*2 + dimensions.phoneSideWidth*2)+1) * 1.78, //558, 561
            position: 'absolute'
        }
    }
}

export default config;