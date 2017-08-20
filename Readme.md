# app-store-image-generator

**Automatic generation of localised app store images in Sketch with react-sketchapp.**

New app screenshots? Don't update all app images manually! Update all app images for all locales in an instant by generating them in Sketch automatically! 

![app-store-image-generator screenshot tool](https://raw.githubusercontent.com/kristinbaumann/app-store-image-generator/master/app-store-image-generator-example.png?token=ANZUAWQobNXJRPcIlj6bjA-ta6zbi0Y7ks5ZocqFwA%3D%3D)

## Quick Setup

Requirements: Node.js, Sketch App 

1. Install node modules by running `npm install` (once)
2. Open an empty Sketch project (and close all other Sketch project)
3. Run `npm run serveImages` to serve the content of the image directory in `./data` (since React Sketchapp cannot include images with local paths)
4. Run `npm run render` in another terminal to generate the app images in Sketch. Sketch will hot reload.

## Customising your app images
* Set your locales and styling in `config.js` 
* Replace the default translation strings in `./data/translations.json`
* Replace the default app screenshots in `./data/screenshots`


Source of device frames: http://facebook.design/devices