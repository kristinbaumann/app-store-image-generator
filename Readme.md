# app-store-image-generator

**Automatic generation of localised app store images in Sketch with react-sketchapp.**

Put together caption translations and localised app screenshots. Update all app images for all locales in an instant! 

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
