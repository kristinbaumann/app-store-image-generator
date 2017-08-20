// width of app image
const imageWidth = 414;

// collection of phone frame sizes
const phoneSizes = {
    XL:  {
        "phoneMargin": 25, 
        "phoneTopWidth": 90,
        "phoneSideWidth": 25
    },
    L: {
        "phoneMargin": 40, 
        "phoneTopWidth": 83,
        "phoneSideWidth": 23
    },
    M: {
        "phoneMargin": 55, 
        "phoneTopWidth": 75, 
        "phoneSideWidth": 21 
    },
    S: {
        "phoneMargin": 75, 
        "phoneTopWidth": 65,
        "phoneSideWidth": 17
    }
}
// set dimensions of phone frame size
const dimensions = phoneSizes.L; 

const config = {
    layout: {
        itemWidth: imageWidth, // image width is 414 --> export image in Sketch with x3 to get 1242×2208px
        itemHeight: 736, // image height is 736 --> export image in Sketch with x3 to get 1242×2208px
        cols: 5, // number of images per locale
        margin: 100
    },
    // file with translations in all locales
    translations: require('../data/translations/translations.json'),
    // set of locales
    locales: ["en-US","de-DE","fr-FR","it-IT","nl-NL","es-ES","ru-RU"],
    // currently in react sketchapp local images cannot be embedded, serve locally by using "npm run serveImages" command
    imageUrl: 'http://localhost:5000',
    // selected phone frame from images directory
    phoneFrame: 'frame_iphone7_abstract.png',
    // styles used for generated app images
    styles: {
        container:{
            backgroundColor: '#F2F2F2'
        },
        storeImage: {
            position: 'fixed',
            backgroundColor: '#005493', // artboard background color
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center' // centered items
        },
        title: {
            // title attributes
            width: imageWidth,
            fontSize: 40, 
            lineHeight: 32, 
            fontFamily: 'SF Pro Display', 
            fontWeight: 'bold', 
            color: '#ffffff', 
            paddingTop: 55,
            paddingBottom: 50,
            paddingLeft: 25,
            paddingRight: 25,
            textAlign: 'center'
        },
        imageContainer: {
            position: 'relative',
        },
        phone: {
            width: imageWidth-(dimensions.phoneMargin * 2), // 365px
            height: (imageWidth-(dimensions.phoneMargin * 2) )* 2.04 // 743px
        },
        screenshot: {
            borderWidth: 1,
            borderColor: '#000000',
            top: dimensions.phoneTopWidth,
            left: dimensions.phoneSideWidth-1,
            width: imageWidth-(dimensions.phoneMargin*2 + dimensions.phoneSideWidth*2)+1,
            height: (imageWidth-(dimensions.phoneMargin*2 + dimensions.phoneSideWidth*2)+1) * 1.78,
            position: 'absolute'
        }
    }
}

export default config;